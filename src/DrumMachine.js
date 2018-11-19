import React, { Component } from 'react';
import KeyPad from './components/KeyPad/KeyPad';
import Controls from './components/Controls/Controls'
import './DrumMachine.css';

/*Stackoverflow https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack*/
function importAll(r) {
  let audios = [];
  r.keys().forEach((item, index) => {
    audios.push(r(item));
  });
  return audios;
}

const kit1 = importAll(require.context('./resources/audio-kit1', false, /.mp3$/));
const kit2 = importAll(require.context('./resources/audio-kit2', false, /.wav$/));

class DrumMachine extends Component {

  state = {
    audios: kit1,
    selectedPad: null,
    power: true
  }

componentDidMount() {
  window.addEventListener('keydown', (e) => {
    this.selectPadHandler(e.key.toUpperCase())
  });
}
selectPadHandler = (char) => {
  this.setState({
    selectedPad: char
  });
}

/* When animation for active button ends */
removeActiveButton = () => {
   this.setState({selectedPad: null});
}

togglePowerHandler = () => {
  this.setState({power: !this.state.power})
}

  render() {
    return (
      <div className="DrumMachine">
        <KeyPad
          audios={this.state.audios}
          selectPad={this.selectPadHandler}
          selectedPad={this.state.selectedPad}
          removeActive={this.removeActiveButton}/>
        <Controls
          power={this.state.power}
          togglePower={this.togglePowerHandler}/>
      </div>
    );
  }
}

export default DrumMachine;
