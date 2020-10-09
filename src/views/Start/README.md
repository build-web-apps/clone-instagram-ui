# Start view

Start view is responsible for **Registration** (or) **Login** form

1. Create a folder `Start` under `src/views`
2. Create a file `index.js` and paste the following:

```js
import React from 'react';
import { INSTAGRAM_SRC } from '../../components/Header/Header';
import { Logo } from '../../components/Header/Logo/Logo';
import './index.css';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import { postCall } from '../../utils/Network';
import {
  setUserInformation,
  isValid,
  getUserInformation,
} from '../../utils/Utils';
import { Redirect } from 'react-router-dom';
import { INVALID_CREDENTIALS_ERROR } from '../../Constants';
import { Loader } from '../../components/Loader/Loader';

const LOGIN_API = '/users/login';
const REGISTRATION_API = '/users/signup';

export class Start extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      name: '',
      username: '',
      password: '',
      loader: false,
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
      error: null,
      isLogin: !this.state.isLogin,
    });
  };

  setSuccess = (data) => {
    setUserInformation(JSON.stringify(data));
    this.setState({
      loader: false,
      success: true,
    });
    window.location.reload();
  };

  setError = () => {
    this.setState({
      error: true,
      loader: false,
    });
  };

  showLoader = () => {
    this.setState({
      loader: true,
    });
  };

  hideLoader = () => {
    this.setState({
      loader: false,
    });
  };

  handleStartClick = async () => {
    this.showLoader();
    if (this.state.isLogin) {
      // Then user is logging in

      try {
        let response = await postCall(
          LOGIN_API,
          JSON.stringify({
            userName: this.state.username,
            password: this.state.password,
          })
        );
        const json = await response.json();
        this.setSuccess(json);
      } catch (error) {
        this.setError(error);
      }
    } else {
      // The user is trying to register
      try {
        let response = await postCall(
          REGISTRATION_API,
          JSON.stringify({
            userName: this.state.username,
            password: this.state.password,
            name: this.state.name,
          })
        );
        const json = await response.json();
        this.setSuccess(json);
      } catch (error) {
        this.setError(error);
      }
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
      return (
        <Redirect to="/home" userInformation={getUserInformation().profile} />
      );
    }
    return (
      <div className="start">
        <section className="start-container primary">
          {this.state.loader && <Loader />}
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
        {this.state.error && (
          <section className="start-container secondary">
            <span className="error">{INVALID_CREDENTIALS_ERROR}</span>
          </section>
        )}
      </div>
    );
  }
}
```

3. Create a file `index.css` and paste the following:

```css
.start-container {
  position: relative;
  width: 500px;
  display: flex;
  margin: 20px auto;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  background: #fff;
  padding: 10px;
  flex-direction: column;
}

.start-container.primary {
  margin-top: 13%;
}

.start-container h2 {
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 600;
  max-width: 300px;
  text-align: center;
}

.start-container form {
  margin-top: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.start-container form div {
  margin-bottom: 15px;
}

.start-container form div input {
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.42);
  min-height: 30px;
  padding-left: 5px;
  border-radius: 5px;
}

.start-container.secondary {
  flex-direction: row;
}

.login-ref {
  color: #0095f6;
  margin-left: 5px;
  cursor: pointer;
}

.error {
  color: red;
}
```
