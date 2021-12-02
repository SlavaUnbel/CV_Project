import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GithubProfilesContext from '../../context/portfolioItems/GithubProfilesContext';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  user: state.portfolioItems.githubUser,
  repos: state.portfolioItems.githubRepos,
  searchForAUser: state.portfolioItems.searchForAUser,
  noUserFound: state.portfolioItems.noUserFound,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getGithubProfile: bindActionCreators(
    portfolioItemsActions.githubProfiles.get,
    dispatch
  ),
  setSearchForAUser: bindActionCreators(
    portfolioItemsActions.githubProfiles.setSearchForAUser,
    dispatch
  ),
  setNoUserFound: bindActionCreators(
    portfolioItemsActions.githubProfiles.setNotFound,
    dispatch
  ),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubProfilesContext);
