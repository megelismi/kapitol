import React, { Component } from 'react';
import { Button } from 'react-bootstrap'; 
import capitol from '../images/capitol_hill.jpg'; 
import '../styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button bsStyle="primary">Primary</Button>
        <img className="capitol" alt="" src={capitol} />
      </div>
    );
  }
}

export default App;
