import React, { Component } from 'react';
import KeyPad from './components/KeyPad/KeyPad';
import Controls from './components/Controls/Controls'
import AudioContext from './audio-context';

import './DrumMachine.css';

/*Stackoverflow https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack*/
function importAll(r) {
  let audios = [];
  r.keys().forEach((item, index) => {
    audios.push({
      src: r(item),
      type: r(item).slice(r(item).lastIndexOf('/') + 1, r(item).indexOf('.')) //the portion of path from last / to . To extract the name of file
    });
  });
  return audios;
}

const kit1 = importAll(require.context('./resources/audio-kit1', false, /.mp3$/));
const kit2 = importAll(require.context('./resources/audio-kit2', false, /.wav$/));

class DrumMachine extends Component {

  state = {
    audios: kit1,
    type: null,
    selectedPad: null,
    power: true,
    kit2: false,
    volume: 50
  }

componentDidMount() {
  window.addEventListener('keydown', (e) => {
    this.selectPadHandler(e.key.toUpperCase())
  });
}

selectPadHandler = (char) => {
  if(!this.state.power) {
    return;
  }
  this.setState({
    selectedPad: char
  });
}

/* When animation for active button ends */
removeActiveButton = () => {
   this.setState({selectedPad: null});
}

togglePowerHandler = () => {
  this.setState({
    power: !this.state.power,
    type: null
  })
}

toggleBankHandler = () => {
  if(this.state.audios === kit1) {
    this.setState({
      audios: kit2,
      kit2: true
    });
  } else {
    this.setState({
      audios: kit1,
      kit2: false
  });
  }
}

changeVolumeHandler = (e) => {
  this.setState({volume: e.target.value});
}

displayTypeHandler = (src) => {
   /* Find the audio with the src passed, and destructure the type property*/
    const {type} = this.state.audios.find(audio => audio.src === src );

    this.setState({type});
}

  render() {
    return (
      <div className="DrumMachine">
      <AudioContext.Provider value={{
        volume: this.state.volume,
        displayType: this.displayTypeHandler
      }}>
        <KeyPad
          audios={this.state.audios}
          selectPad={this.selectPadHandler}
          selectedPad={this.state.selectedPad}
          removeActive={this.removeActiveButton}
        />
      </AudioContext.Provider>

        <Controls
          kit2={this.state.kit2}
          power={this.state.power}
          togglePower={this.togglePowerHandler}
          toggleBank={this.toggleBankHandler}
          volume={this.state.volume}
          changeVolume={this.changeVolumeHandler}
          type={this.state.type}/>
      </div>
    );
  }
}

export default DrumMachine;
