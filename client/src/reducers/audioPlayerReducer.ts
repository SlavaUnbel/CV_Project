import { createSymbiote } from 'redux-symbiote';

export interface AudioPlayerState {
  list: string[];
  audio: string | null;
  isOpen: boolean;
  isPlaying: boolean;
  autoPlay: boolean;
  repeat: boolean;
}

const initialAudioPlayerState: AudioPlayerState = {
  list: [],
  audio: "",
  isOpen: false,
  isPlaying: false,
  autoPlay: false,
  repeat: false,
};

const symbiotes = {
  list: {
    add: (state: AudioPlayerState, item: string) => ({ ...state }),
    remove: (state: AudioPlayerState, item: string) => ({ ...state }),
    set: (state: AudioPlayerState, list: string[]) => ({ ...state, list }),
  },
  audio: {
    set: (state: AudioPlayerState, audio: string | null) => ({
      ...state,
      audio,
    }),
  },
  isOpen: {
    open: (state: AudioPlayerState) => ({ ...state, isOpen: true }),
    close: (state: AudioPlayerState) => ({ ...state, isOpen: false }),
  },
  isPlaying: {
    play: (state: AudioPlayerState, autoPlay?: boolean) => ({
      ...state,
      isPlaying: true,
    }),
    pause: (state: AudioPlayerState) => ({ ...state, isPlaying: false }),
    stop: (state: AudioPlayerState) => ({ ...state, isPlaying: false }),
  },
  autoPlay: {
    set: (state: AudioPlayerState, autoPlay: boolean) => ({
      ...state,
      autoPlay,
    }),
  },
  repeat: {
    set: (state: AudioPlayerState, repeat: boolean) => ({ ...state, repeat }),
  },
};

export const { actions: audioPlayerActions, reducer: audioPlayerReducer } =
  createSymbiote(initialAudioPlayerState, symbiotes);
