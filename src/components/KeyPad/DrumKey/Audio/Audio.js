import React, {Component } from 'react';

class Audio extends Component {

componentDidUpdate(prevProps, prevState) {
  if(prevProps.selectedPad !== this.props.selectedPad && this.props.audioId === this.props.selectedPad) {
    this.audio.currentTime = 0;
    this.audio.volume = parseFloat(this.props.volume) / 100;
    this.audio.play();
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
