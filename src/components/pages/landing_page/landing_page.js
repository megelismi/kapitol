import React, { Component } from 'react';
import { Button } from 'react-bootstrap'; 
import capitol from '../../../images/capitol_hill.jpg'; 
import '../../../styles/main.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Button bsStyle="primary">Primary</Button>
        <img className="capitol" alt="" src={capitol} />
      </div>
    );
  }
}

export default LandingPage;