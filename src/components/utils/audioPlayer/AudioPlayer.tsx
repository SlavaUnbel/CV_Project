/**
 * TODO:
 * - add list audios
 */
import React, { FC, useContext } from 'react';
import { AudioPlayerCtx } from '../../../utils/context';
import './audio-player.scss';
import AudioPlayerControls from './audioPlayerControlls/AudioPlayerControls';
import AudioPlayerWaveDuration from './audioPlayerWaveDuration/AudioPlayerWaveDuration';

const AudioPlayer: FC = () => {
  const { wavesurferContainer } = useContext(AudioPlayerCtx);

  return (
    <div className="audio-player__wrapper">
      <div ref={wavesurferContainer} />

      <AudioPlayerWaveDuration />

      <AudioPlayerControls />

      {/* <List>
        {list &&
          list.map((item, index) => (
            <ListItem key={index} onClick={() => setAudio && setAudio(item)}>
              <Typography color={item === audio ? 'primary' : 'secondary'}>
                {item}
              </Typography>
            </ListItem>
          ))}
      </List> */}
    </div>
  );
};
export default AudioPlayer;
