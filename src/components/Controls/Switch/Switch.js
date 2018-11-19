import React from 'react';

const Switch = (props) => {

  let classes = ['switch'];
  if(props.power === false) { //off
    classes.push('off');
  }

  if(props.kit2 === true) {
    classes.push('off');
  }


  return (
    <>
    <p className='switch-label'>{props.label === 'power' ? 'Power' : 'Sound Bank'}</p>
    <div className="switch-container" onClick={props.label === 'power' ? props.togglePower : props.toggleBank}>
      <div className={classes.join(' ')}></div>
    </div>
    </>
  );
}

export default Switch;
