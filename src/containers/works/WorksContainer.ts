import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import WorksContext from '../../context/works/WorksContext';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { IState } from '../../reducers/rootReducer';
import { worksActions } from '../../reducers/worksReducer';

const mapStateToProps = (state: IState) => ({
  data: state.works.worksData,
  current: state.works.current,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setData: bindActionCreators(worksActions.worksData.set, dispatch),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  setCurrent: bindActionCreators(worksActions.current.change, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorksContext);