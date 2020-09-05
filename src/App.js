import React from 'react';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import './App.css';
class App extends React.PureComponent {
  onSearchChange = (event) => {
    console.log('Inside Search change', event.target.value);
  };

  renderHeader() {
    return <Header onSearchChange={this.onSearchChange} searchResults={null} />;
  }

  renderBody() {
    return <Body className="ins-body"></Body>;
  }

  renderInstagramUI() {
    return (
      <React.Fragment>
        {this.renderHeader()}
        {this.renderBody()}
      </React.Fragment>
    );
  }

  render() {
    return <div className="ins-ui">{this.renderInstagramUI()}</div>;
  }
}

export default App;
