import React from 'react';
import Audio from './Audio/Audio';

const DrumKey = (props) => {
  return (
    <li className="drum-pad">
      {props.charachter}
      <Audio
        audioSrc={props.audioSrc}
        audioId={props.audioId}/>
    </li>
  );
}

export default DrumKey;
