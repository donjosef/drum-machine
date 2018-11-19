import React from 'react';

const Switch = (props) => {

  let classes = ['switch'];
  if(props.power === false) { //off
    classes.push('off');
  }
  return (
    <>
    <p className='switch-label'>{props.label === 'power' ? 'Power' : 'Sound Bank'}</p>
    <div className="switch-container" onClick={props.togglePower}>
      <div className={classes.join(' ')}></div>
    </div>
    </>
  );
}

export default Switch;
