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
    audios: kit1
  }


  render() {
    return (
      <div className="DrumMachine">
        <KeyPad audios={this.state.audios}/>
        <Controls />
      </div>
    );
  }
}

export default DrumMachine;
