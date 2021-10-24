import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import GithubProfiles from '../../components/portfolioItems/githubProfiles/GithubProfiles';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  user: state.portfolioItems.githubUser,
  repos: state.portfolioItems.githubRepos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setGithubProfilesData: bindActionCreators(
    portfolioItemsActions.githubProfiles.setUser,
    dispatch
  ),
  setGithubProfilesReposData: bindActionCreators(
    portfolioItemsActions.githubProfiles.setRepos,
    dispatch
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubProfiles);
