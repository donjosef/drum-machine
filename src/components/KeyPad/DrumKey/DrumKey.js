import React from 'react';
import Audio from './Audio/Audio';

const DrumKey = (props) => {

  let classes = ["drum-pad"];
  if(props.selectedPad && props.selectedPad === props.charachter) {
    classes.push("active");
  }

  return (
    <li
      id={props.id}
      className={classes.join(' ')}
      onClick={() => props.selectPad(props.charachter)}
      onAnimationEnd={props.removeActive}
      >
      {props.charachter}
      <Audio
        selectedPad={props.selectedPad}
        audioSrc={props.audio.src}
        audioId={props.audioId}
        />
    </li>
  );
}

export default DrumKey;
