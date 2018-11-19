import React from 'react';
import Switch from './Switch/Switch';
import Volume from './Volume/Volume';
import Display from './Display/Display';

const Controls = (props) => (
  <div className='controls'>
    <Display />
    <Switch
      label='power'
      power={props.power}
      togglePower={props.togglePower}/>
    <Switch
      label='bank'/>
    <Volume />
  </div>
);

export default Controls;
