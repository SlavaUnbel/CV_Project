import React, { FC } from 'react';
import GithubProfiles from '../../components/portfolioItems/githubProfiles/GithubProfiles';
import { GithubProfilesCtx } from '../../utils/context';
import {
  useFetchGithubProfilesUserData,
  useWindowTitle,
} from '../../utils/hooks';

interface Props extends IWithLoading, IWithError, IWithWarning {
  user: IGithubUser;
  setGithubProfilesData: (user: any) => void;

  repos: IGithubRepo[];
  setGithubProfilesReposData: (repos: any[]) => void;
}

const GithubProfilesContext: FC<Props> = ({
  user,
  setGithubProfilesData,
  setLoading,

  repos,
  setGithubProfilesReposData,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('GitHub Profiles');

  const { noUserFound, searchForAUser, searchRef, submitSearch } =
    useFetchGithubProfilesUserData({
      setGithubProfilesData,
      setGithubProfilesReposData,
      setLoading,
      pushError,
      pushWarning,
    });
  return (
    <GithubProfilesCtx.Provider
      value={{
        user,
        setGithubProfilesData,
        setLoading,

        repos,
        setGithubProfilesReposData,

        pushError,
        pushWarning,

        noUserFound,
        searchForAUser,
        searchRef,
        submitSearch,
      }}
    >
      <GithubProfiles />
    </GithubProfilesCtx.Provider>
  );
};

export default GithubProfilesContext;
