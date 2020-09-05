import React from 'react';
import { Header } from './components/Header/Header';

class App extends React.PureComponent {
  renderHeader() {
    return <Header />;
  }

  renderInstagramUI() {
    return <React.Fragment>{this.renderHeader()}</React.Fragment>;
  }

  render() {
    return this.renderInstagramUI();
  }
}

export default App;
