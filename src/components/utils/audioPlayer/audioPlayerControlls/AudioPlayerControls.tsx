import React, { FC } from 'react';
import MainControls from './mainControls/MainControls';
import SpeedControls from './speedControls/SpeedControls';
import VolumeControls from './volumeControls/VolumeControls';

const AudioPlayerControls: FC = () => (
  <div className="tools-wrapper">
    <VolumeControls />

    <MainControls />

    <SpeedControls />
  </div>
);

export default AudioPlayerControls;
