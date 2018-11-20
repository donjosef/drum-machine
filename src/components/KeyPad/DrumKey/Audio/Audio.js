import React, {Component } from 'react';

import AudioContext from '../../../../audio-context';

class Audio extends Component {

static contextType = AudioContext;

componentDidUpdate(prevProps, prevState) {
  if(prevProps.selectedPad !== this.props.selectedPad && this.props.audioId === this.props.selectedPad) {
    this.audio.currentTime = 0;
    this.audio.volume = parseFloat(this.context.volume) / 100;
    this.audio.play();

    this.context.displayType(this.props.audioSrc); //when playing, trigger displayType now handled by context instead of props
  }
}
  render() {
    return (
      <audio
        ref={(audio) => this.audio = audio}
        src={this.props.audioSrc}
        id={this.props.audioId}/>
    )
  }

}

export default Audio;
