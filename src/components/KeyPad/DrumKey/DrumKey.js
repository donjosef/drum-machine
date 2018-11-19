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
        selectedPad={props.selectedPad}
        audioSrc={props.audio}
        audioId={props.audioId}/>
    </li>
  );
}

export default DrumKey;
