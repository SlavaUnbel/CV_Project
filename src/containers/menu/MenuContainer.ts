import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Menu from '../../components/menu/Menu';
import { headerActions } from '../../reducers/headerReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  menuOpen: state.header.menuOpen,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openCloseMenu: bindActionCreators(headerActions.menuOpen.set, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);