import React, { Component } from 'react';
import KeyPad from './components/KeyPad/KeyPad';
import Controls from './components/Controls/Controls'
import './DrumMachine.css';

class DrumMachine extends Component {
  render() {
    return (
      <div className="DrumMachine">
        <KeyPad />
        <Controls />
      </div>
    );
  }
}

export default DrumMachine;
