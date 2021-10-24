import React, { FC } from 'react';
import {
  useFetchGithubProfilesUserData,
  useWindowTitle,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './github-profiles.scss';
import SearchForm from './searchForm/SearchForm';
import UserCard from './userCard/UserCard';

interface Props extends IWithLoading, IWithError, IWithWarning {
  user: IGithubUser;
  setGithubProfilesData: (user: any) => void;

  repos: IGithubRepo[];
  setGithubProfilesReposData: (repos: any[]) => void;
}

const GithubProfiles: FC<Props> = ({
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
    <ComponentWrapper>
      <div className="github-profiles__container">
        <SearchForm searchRef={searchRef} onSubmit={submitSearch} />

        <main>
          <LoaderWrapper
            wrapperStyle={{
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              padding: '3rem',
            }}
          >
            <UserCard
              user={user}
              repos={repos}
              noUserFound={noUserFound}
              searchForAUser={searchForAUser}
            />
          </LoaderWrapper>
        </main>
      </div>
    </ComponentWrapper>
  );
};

export default GithubProfiles;
