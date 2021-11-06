import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import LiveChatContext from '../../context/liveChat/LiveChatContext';
import { liveChatActions } from '../../reducers/liveChatReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  username: state.liveChat.username,
  room: state.liveChat.room,
  chatShown: state.liveChat.chatShown,
  messageList: state.liveChat.messageList,
  roomList: state.liveChat.roomList,
  roomChoice: state.liveChat.roomChoice,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUsername: bindActionCreators(liveChatActions.username.set, dispatch),
  setRoom: bindActionCreators(liveChatActions.room.set, dispatch),
  setChatShown: bindActionCreators(liveChatActions.chatShown.set, dispatch),
  setMessageList: bindActionCreators(liveChatActions.messageList.set, dispatch),
  setRoomList: bindActionCreators(liveChatActions.roomList.set, dispatch),
  setRoomChoice: bindActionCreators(liveChatActions.roomChoice.set, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveChatContext);
