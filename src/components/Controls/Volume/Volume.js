import React from 'react';

const Volume = (props) => (
   <div style={{marginTop: '10px'}}>
    <p style={{margin: 0}}>Volume: {props.volume}</p>
    <input
      className="volume"
      type="range"
      min="0"
      max="100"
      value={props.volume}
      onChange={props.changeVolume} />
    </div>
);

export default Volume;
