import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
    };
  }


  renderView() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }


  render() {
    return (
      this.renderView()
    );
  }
}

export default App;
