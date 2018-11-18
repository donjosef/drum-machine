import React from 'react';
import DrumKey from './DrumKey/DrumKey';

const KeyPad = (props) => {
  const keys = [
    'Q',
    'W',
    'E',
    'A',
    'S',
    'D',
    'Z',
    'X',
    'C',
  ];

  const drumKeys = keys.map((key, index) => (
      <DrumKey
        key={key + index}
        charachter={key}
        audioId={key}
        audioSrc={props.audioSrc}/>
  ));
  return(
    <ul className="keypad">
      {drumKeys}
    </ul>

  );
}

export default KeyPad;
