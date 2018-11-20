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
        volume={props.volume}
        key={key + index}
        charachter={key}
        audioId={key}
        audio={props.audios[index]}
        selectPad={props.selectPad}
        selectedPad={props.selectedPad}
        removeActive={props.removeActive}
        displayType={props.displayType}/>
  ));
  return(
    <ul className="keypad">
      {drumKeys}
    </ul>

  );
}

export default KeyPad;
