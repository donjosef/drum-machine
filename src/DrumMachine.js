import React, { Component } from 'react';
import KeyPad from './components/KeyPad/KeyPad';
import './DrumMachine.css';

class DrumMachine extends Component {
  render() {
    return (
      <div className="DrumMachine">
        <KeyPad />

      </div>
    );
  }
}

export default DrumMachine;
