import React from 'react';
import Power from './Power/Power';
import SoundBank from './SoundBank/SoundBank';
import Volume from './Volume/Volume';
import Display from './Display/Display';

const Controls = (props) => (
  <div className='controls'>
    <Display />
    <Power />
    <SoundBank />
    <Volume />
  </div>
);

export default Controls;
