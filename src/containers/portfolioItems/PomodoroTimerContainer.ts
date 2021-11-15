import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import PomodoroTimerContext from '../../context/portfolioItems/PomodoroTimerContext';
import { audioPlayerActions } from '../../reducers/audioPlayerReducer';
import { messageActions } from '../../reducers/messageReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  audio: state.audioPlayer.audio,
  audioList: state.audioPlayer.list,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAudio: bindActionCreators(audioPlayerActions.audio.set, dispatch),
  setAudioList: bindActionCreators(audioPlayerActions.list.set, dispatch),
  play: bindActionCreators(audioPlayerActions.isPlaying.play, dispatch),
  pause: bindActionCreators(audioPlayerActions.isPlaying.pause, dispatch),
  stop: bindActionCreators(audioPlayerActions.isPlaying.stop, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
  pushSuccess: bindActionCreators(messageActions.message.success, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PomodoroTimerContext);
