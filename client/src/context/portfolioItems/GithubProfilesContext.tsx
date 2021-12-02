import React, { FC } from 'react';

import GithubProfiles from '../../components/portfolioItems/githubProfiles/GithubProfiles';
import { GithubProfilesCtx } from '../../utils/context';
import { useFetchGithubProfilesUserData, useWindowTitle } from '../../utils/hooks';

interface Props extends IWithWarning {
  user: IGithubUser;
  repos: IGithubRepo[];
  getGithubProfile: (url: string) => void;

  searchForAUser: boolean;
  setSearchForAUser: (search: boolean) => void;

  noUserFound: boolean;
  setNoUserFound: (exists: boolean) => void;
}

const GithubProfilesContext: FC<Props> = ({
  user,
  repos,
  getGithubProfile,

  searchForAUser,
  setSearchForAUser,

  noUserFound,
  setNoUserFound,

  pushWarning,
}) => {
  useWindowTitle("GitHub Profiles");

  const { searchRef, submitSearch } = useFetchGithubProfilesUserData({
    getGithubProfile,
    setNoUserFound,
    pushWarning,
  });

  return (
    <GithubProfilesCtx.Provider
      value={{
        user,
        repos,
        getGithubProfile,

        searchForAUser,
        setSearchForAUser,

        noUserFound,
        setNoUserFound,

        searchRef,
        submitSearch,

        pushWarning,
      }}
    >
      <GithubProfiles />
    </GithubProfilesCtx.Provider>
  );
};

export default GithubProfilesContext;
