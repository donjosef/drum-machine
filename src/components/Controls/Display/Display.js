import React from 'react';

const Display = (props) => {
  return (
    <div className='display'>{props.power ? props.type : null}</div>

  );
}


export default Display;
