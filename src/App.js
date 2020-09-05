import React from 'react';
import { Header } from './components/Header/Header';

class App extends React.PureComponent {
  onSearchChange = (event) => {
    console.log('Inside Search change', event.target.value);
  };

  renderHeader() {
    return <Header onSearchChange={this.onSearchChange} searchResults={null} />;
  }

  renderInstagramUI() {
    return <React.Fragment>{this.renderHeader()}</React.Fragment>;
  }

  render() {
    return this.renderInstagramUI();
  }
}

export default App;
