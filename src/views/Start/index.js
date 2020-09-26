import React from 'react';
import { INSTAGRAM_SRC } from '../../components/Header/Header';
import { Logo } from '../../components/Header/Logo/Logo';
import './index.css';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import { postCall } from '../../utils/Network';
import { setUserInformation, isValid } from '../../utils/Utils';
import { Redirect } from 'react-router-dom';

export class Start extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      name: '',
      username: '',
      password: '',
      success: false,
      error: false,
    };
  }
  handleChange(type, event) {
    this.setState({
      [type]: event.target.value,
    });
  }

  switchStartView = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  setSuccess = (data) => {
    setUserInformation(JSON.stringify(data));
    this.setState({
      success: true,
    });
  };

  handleStartClick = async () => {
    if (this.state.isLogin) {
      // Then user is logging in

      try {
        let response = await postCall(
          '/users/login',
          JSON.stringify({
            userName: this.state.username,
            password: this.state.password,
          })
        );
        const json = await response.json();
        this.setSuccess(json);
      } catch (err) {
        this.setState({
          error: true,
        });
      }
    } else {
      // The user is trying to register
      postCall(
        '/users/signup',
        JSON.stringify({
          userName: this.state.username,
          password: this.state.password,
          name: this.state.name,
        })
      )
        .then((response) => {
          const json = response.json();
          this.setSuccess(json);
        })
        .catch((error) => {
          this.setState({
            error: true,
          });
        });
    }
  };

  checkIsDisabled = () => {
    if (this.state.isLogin) {
      return !(isValid(this.state.username) && isValid(this.state.password));
    }
    return !(
      isValid(this.state.name) &&
      isValid(this.state.username) &&
      isValid(this.state.password)
    );
  };

  render() {
    const disabled = this.checkIsDisabled();
    if (this.state.success) {
      return <Redirect to="/" />;
    }
    return (
      <div className="start">
        <section className="start-container primary">
          <Logo className="start-logo" src={INSTAGRAM_SRC} />
          {!this.state.isLogin && (
            <h2>Sign up to see photos and videos from your friends.</h2>
          )}
          <form noValidate autoComplete="off">
            {!this.state.isLogin && (
              <Input
                fullWidth="true"
                placeholder="Name"
                variant="outlined"
                onChange={this.handleChange.bind(this, 'name')}
              />
            )}
            <Input
              fullWidth="true"
              placeholder="Username"
              onChange={this.handleChange.bind(this, 'username')}
            />
            <Input
              fullWidth="true"
              placeholder="Password"
              type="password"
              onChange={this.handleChange.bind(this, 'password')}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleStartClick}
              disabled={disabled}
            >
              {!this.state.isLogin ? 'Sign up' : 'Sign in'}
            </Button>
          </form>
        </section>
        <section className="start-container secondary">
          {!this.state.isLogin ? 'Have an account?' : "Don't have an account?"}
          <span
            className="login-ref"
            onClick={(event) => this.switchStartView(event)}
          >
            {!this.state.isLogin ? 'Log in' : 'Sign up'}
          </span>
        </section>
      </div>
    );
  }
}
