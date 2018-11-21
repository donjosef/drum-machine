import React from 'react';

const Display = (props) => {
  return (
    <div id="display" className='display'>{props.power ? props.type : null}</div>

  );
}


export default Display;
