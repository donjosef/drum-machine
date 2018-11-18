import React from 'react';

const Audio = (props) => (
  <audio
    src={props.audioSrc}
    id={props.audioId}/>
);

export default Audio;
