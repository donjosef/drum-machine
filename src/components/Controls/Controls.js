import React from 'react';
import Power from './Power/Power';
import SoundBank from './SoundBank/SoundBank';
import Volume from './Volume/Volume'

const Controls = (props) => (
  <div className='controls'>
    <Power />
    <SoundBank />
    <Volume />
  </div>
);

export default Controls;
