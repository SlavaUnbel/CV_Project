import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import AudioPlayerContext from '../../context/audioPlayer/AudioPlayerContext';
import { audioPlayerActions } from '../../reducers/audioPlayerReducer';
import { messageActions } from '../../reducers/messageReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  audio: state.audioPlayer.audio,
  list: state.audioPlayer.list,
  playing: state.audioPlayer.isPlaying,
  autoPlay: state.audioPlayer.autoPlay,
  repeat: state.audioPlayer.repeat,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAudio: bindActionCreators(audioPlayerActions.audio.set, dispatch),
  setList: bindActionCreators(audioPlayerActions.list.set, dispatch),
  setAutoPlay: bindActionCreators(audioPlayerActions.autoPlay.set, dispatch),
  setRepeat: bindActionCreators(audioPlayerActions.repeat.set, dispatch),
  onPlay: bindActionCreators(audioPlayerActions.isPlaying.play, dispatch),
  onPause: bindActionCreators(audioPlayerActions.isPlaying.pause, dispatch),
  onStop: bindActionCreators(audioPlayerActions.isPlaying.stop, dispatch),
  onError: bindActionCreators(messageActions.message.error, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayerContext);
