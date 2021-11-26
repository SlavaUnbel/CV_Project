import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PomodoroTimerContext from '../../context/pomodoroTimer/PomodoroTimerContext';
import { audioPlayerActions } from '../../reducers/audioPlayerReducer';
import { messageActions } from '../../reducers/messageReducer';
import { pomodoroTimerActions } from '../../reducers/pomodoroTimerReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  pomodoro: state.pomodoroTimer.pomodoro,
  newTimer: state.pomodoroTimer.newTimer,
  executing: state.pomodoroTimer.executing,
  startAnimate: state.pomodoroTimer.startAnimate,
  timerDisabled: state.pomodoroTimer.timerDisabled,
  playerOpened: state.pomodoroTimer.playerOpened,

  audio: state.audioPlayer.audio,
  audioList: state.audioPlayer.list,
  autoPlay: state.audioPlayer.autoPlay,
  isPlaying: state.audioPlayer.isPlaying,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPomodoro: bindActionCreators(pomodoroTimerActions.pomodoro.set, dispatch),
  setNewTimer: bindActionCreators(pomodoroTimerActions.timer.new, dispatch),
  setExecuting: bindActionCreators(
    pomodoroTimerActions.timer.execute,
    dispatch
  ),
  setStartAnimate: bindActionCreators(
    pomodoroTimerActions.animate.set,
    dispatch
  ),
  setTimerDisabled: bindActionCreators(
    pomodoroTimerActions.timerDisabled.set,
    dispatch
  ),
  setPlayerOpened: bindActionCreators(
    pomodoroTimerActions.playerOpened.set,
    dispatch
  ),

  setAudio: bindActionCreators(audioPlayerActions.audio.set, dispatch),
  setAudioList: bindActionCreators(audioPlayerActions.list.set, dispatch),
  setAutoPlay: bindActionCreators(audioPlayerActions.autoPlay.set, dispatch),
  play: bindActionCreators(audioPlayerActions.isPlaying.play, dispatch),
  pause: bindActionCreators(audioPlayerActions.isPlaying.pause, dispatch),
  stop: bindActionCreators(audioPlayerActions.isPlaying.stop, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
  pushSuccess: bindActionCreators(messageActions.message.success, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PomodoroTimerContext);
