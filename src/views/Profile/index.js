import React from 'react';

export class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.username = props.match.params.username;
  }
  render() {
    return <span>Welcome! {this.username}</span>;
  }
}
