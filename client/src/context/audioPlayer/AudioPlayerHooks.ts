import { RefObject, useCallback, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface AudioPlayerProps {
  wavesurfer: RefObject<WaveSurfer>;
  audio: string | null;
  list?: string[];
  playing?: boolean;
  autoPlay?: boolean;
  repeat?: boolean;
  setRepeat?: (repeat: boolean) => void;
  setAutoPlay?: (autoPlay: boolean) => void;
  setAudio?: (audio: string | null) => void;
  setList?: (list: string[]) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onStop?: () => void;
  onError?: (message: string) => void;
  setCurrentTime: (currentTime: number) => void;
  setDuration: (duration: number) => void;
  setVolume: (volume: number) => void;
  setPlaybackRate: (rate: number) => void;
}

export const useAudioPlayerWaveDuration = () => {
  const presentSeconds = (seconds: number) =>
    `${getMinutes(seconds)}:${getSeconds(seconds)}`;

  const getMinutes = (seconds: number) =>
    toTwoSymbols(Math.floor(seconds / 60));

  const getSeconds = (seconds: number) =>
    toTwoSymbols(Math.floor(seconds % 60));

  const toTwoSymbols = (number: number) =>
    number.toFixed(0).toString().padStart(2, '0');

  return presentSeconds;
};

export const useCurrentTime = (wavesurfer: RefObject<WaveSurfer>) => {
  const [currentTime, setCurrentTime] = useState(0);

  const handleChangeCurrentTime = useCallback(
    (time: number) => {
      setCurrentTime(wavesurfer.current?.getCurrentTime() || 0);
    },
    [wavesurfer],
  );

  return { currentTime, setCurrentTime, handleChangeCurrentTime };
};

export const useDuration = () => {
  const [duration, setDuration] = useState(0);

  return { duration, setDuration };
};

export const useVolume = (wavesurfer: RefObject<WaveSurfer>) => {
  const [volume, setVolume] = useState(0);

  const handleChangeVolume = useCallback((volume: number) => {
    setVolume(volume);
  }, []);

  const changeVolume = useCallback(
    (volume: number) => {
      wavesurfer.current?.setVolume(volume);
    },
    [wavesurfer],
  );

  const changeMute = useCallback(() => {
    wavesurfer.current?.setMute(!wavesurfer.current?.getMute() || false);
  }, [wavesurfer]);

  return { volume, setVolume, handleChangeVolume, changeVolume, changeMute };
};

export const usePlaybackRate = (wavesurfer: RefObject<WaveSurfer>) => {
  const [playbackRate, setPlaybackRate] = useState(1);

  const changePlaybackRate = useCallback(
    (rate: number) => {
      wavesurfer.current?.setPlaybackRate(rate);
      setPlaybackRate(rate);
    },
    [wavesurfer],
  );

  return { playbackRate, setPlaybackRate, changePlaybackRate };
};

export const useOtherAudioPlayerFunctional = ({
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
}: AudioPlayerProps) => {
  const [isPlaying, setPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setPlaying(true);
    onPlay && onPlay();
  }, [setPlaying, onPlay]);

  const handlePause = useCallback(() => {
    setPlaying(false);
    onPause && onPause();
  }, [setPlaying, onPause]);

  const handleStop = useCallback(() => {
    setPlaying(false);
    onStop && onStop();
  }, [setPlaying, onStop]);

  const handleReady = useCallback(() => {
    setPlaying(wavesurfer.current?.isPlaying() || false);
    setDuration(wavesurfer.current?.getDuration() || 0);
    setVolume(wavesurfer.current?.getVolume() || 1);
    setPlaybackRate(wavesurfer.current?.getPlaybackRate() || 1);
    wavesurfer.current?.play();
  }, [wavesurfer, setPlaying, setDuration, setVolume, setPlaybackRate]);

  const handleError = useCallback(
    (message: string) => {
      onError && onError(message);
    },
    [onError],
  );

  useEffect(() => {
    if (!list) return;
    setList && setList(list);
  }, [list, setList]);

  useEffect(() => {
    if (playing === undefined) return;
    if (playing) {
      wavesurfer.current?.play();
      onPlay && onPlay();
    } else {
      wavesurfer.current?.pause();
      onPause && onPause();
    }
  }, [wavesurfer, playing, onPlay, onPause]);

  // ACTIONS
  const play = useCallback(() => {
    wavesurfer.current?.play();
    onPlay && onPlay();
  }, [wavesurfer, onPlay]);

  const pause = useCallback(() => {
    wavesurfer.current?.pause();
    onPause && onPause();
  }, [wavesurfer, onPause]);

  const stop = useCallback(() => {
    wavesurfer.current?.stop();
    onStop && onStop();
  }, [wavesurfer, onStop]);

  const seekBack = useCallback(() => {
    if (wavesurfer.current) {
      wavesurfer.current.setCurrentTime(
        Math.max(wavesurfer.current.getCurrentTime() - 10, 0),
      );
    }
  }, [wavesurfer]);

  const seekForward = useCallback(() => {
    if (wavesurfer.current) {
      wavesurfer.current.setCurrentTime(
        Math.min(
          wavesurfer.current.getCurrentTime() + 10,
          wavesurfer.current.getDuration(),
        ),
      );
    }
  }, [wavesurfer]);

  const skipNext = useCallback(() => {
    if (!list || !setAudio) return;
    const nextIndex = list.indexOf(audio || '') + 1;
    setAudio(list[nextIndex] || list[0] || null);
  }, [audio, list, setAudio]);

  const repeatCurrent = useCallback(() => {
    if (!list || !setAudio) return;
    const currentIndex = list.indexOf(audio || '');
    setAudio(list[currentIndex] || null);
  }, [audio, list, setAudio]);

  const skipPrevious = useCallback(() => {
    if (!list || !setAudio) return;
    const nextIndex = list.indexOf(audio || '') - 1;
    setAudio(list[nextIndex] || list[list.length - 1] || null);
  }, [audio, list, setAudio]);

  useEffect(() => {
    if (audio) {
      setCurrentTime(0);
      setDuration(0);
      wavesurfer.current?.load(audio);
      wavesurfer.current?.on('finish', repeat ? repeatCurrent : skipNext);
    }
  }, [
    audio,
    wavesurfer,
    repeat,
    setCurrentTime,
    setDuration,
    skipNext,
    repeatCurrent,
  ]);

  return {
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
  };
};
