import React, { FC, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import AudioPlayer from '../../components/utils/audioPlayer/AudioPlayer';
import { isMobile } from '../../utils/constants';
import { AudioPlayerCtx } from '../../utils/context';
import {
  useAudioPlayerWaveDuration,
  useCurrentTime,
  useDuration,
  useOtherAudioPlayerFunctional,
  usePlaybackRate,
  useVolume,
} from './AudioPlayerHooks';

interface Props {
  audio: string | null;
  list?: string[];
  playing?: boolean;
  autoPlay?: boolean;
  repeat?: boolean;
  setRepeat?: (repeat: boolean) => void;
  setAudio?: (audio: string | null) => void;
  setList?: (list: string[]) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onStop?: () => void;
  onError?: (message: string) => void;
}

const AudioPlayerContext: FC<Props> = ({
  list,
  audio,
  playing,
  repeat,
  setRepeat,
  setAudio,
  setList,
  onPlay,
  onPause,
  onStop,
  onError,
}) => {
  const wavesurfer = useRef<WaveSurfer>(null);
  const wavesurferContainer = useRef<HTMLDivElement>(null);

  const { currentTime, setCurrentTime, handleChangeCurrentTime } =
    useCurrentTime(wavesurfer);

  const { duration, setDuration } = useDuration();
  const presentSeconds = useAudioPlayerWaveDuration();

  const { volume, setVolume, handleChangeVolume, changeVolume, changeMute } =
    useVolume(wavesurfer);

  const { playbackRate, setPlaybackRate, changePlaybackRate } =
    usePlaybackRate(wavesurfer);

  const {
    isPlaying,
    handlePlay,
    handlePause,
    handleStop,
    handleReady,
    handleError,
    play,
    pause,
    stop,
    seekBack,
    seekForward,
    skipNext,
    skipPrevious,
  } = useOtherAudioPlayerFunctional({
    wavesurfer,
    list,
    audio,
    playing,
    repeat,
    setAudio,
    setList,
    onPlay,
    onPause,
    onStop,
    onError,
    setCurrentTime,
    setDuration,
    setVolume,
    setPlaybackRate,
  });

  useEffect(() => {
    wavesurfer.current?.on('ready', handlePause);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (wavesurferContainer.current) {
      const instance = WaveSurfer.create({
        container: wavesurferContainer.current,
        height: isMobile ? 48 : 72,
        fillParent: true,
        progressColor: '#fe6f6b',
        waveColor: '#c9ccea',
      });
      instance.on('audioprocess', handleChangeCurrentTime);
      instance.on('seek', handleChangeCurrentTime);
      instance.on('play', handlePlay);
      instance.on('pause', handlePause);
      instance.on('stop', handleStop);
      instance.on('ready', handleReady);
      instance.on('volume', handleChangeVolume);
      instance.on('error', handleError);
      // @ts-ignore
      wavesurfer.current = instance;
      return () => instance.destroy();
    }
    //eslint-disable-next-line
  }, [
    handleChangeCurrentTime,
    handlePause,
    handlePlay,
    handleStop,
    handleReady,
    handleChangeVolume,
    handleError,
  ]);

  return (
    <AudioPlayerCtx.Provider
      value={{
        wavesurferContainer,

        currentTime,
        duration,
        presentSeconds,

        volume,
        changeVolume,
        changeMute,

        isPlaying,
        repeat,
        setRepeat,
        play,
        pause,
        stop,
        skipPrevious,
        skipNext,
        seekBack,
        seekForward,

        playbackRate,
        changePlaybackRate,
      }}
    >
      <AudioPlayer />
    </AudioPlayerCtx.Provider>
  );
};

export default AudioPlayerContext;
