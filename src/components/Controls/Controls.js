import React from 'react';
import Switch from './Switch/Switch';
import Volume from './Volume/Volume';
import Display from './Display/Display';

const Controls = (props) => (
  <div className='controls'>
    <Display
      type={props.type}
      power={props.power}/>
    <Switch
      label='power'
      power={props.power}
      togglePower={props.togglePower}/>
    <Switch
      kit2={props.kit2}
      toggleBank={props.toggleBank}
      label='bank'/>
    <Volume
      volume={props.volume}
      changeVolume={props.changeVolume}/>
  </div>
);

export default Controls;
