import React from 'react';
import Audio from './Audio/Audio';

const DrumKey = (props) => {

  let classes = ["drum-pad"];
  if(props.selectedPad && props.selectedPad === props.charachter) {
    classes.push("active");
  }

  return (
    <li
      className={classes.join(' ')}
      onClick={() => props.selectPad(props.charachter)}
      onAnimationEnd={props.removeActive}
      >
      {props.charachter}
      <Audio
        volume={props.volume}
        selectedPad={props.selectedPad}
        audioSrc={props.audio.src}
        audioId={props.audioId}
        displayType={props.displayType}/>
    </li>
  );
}

export default DrumKey;
