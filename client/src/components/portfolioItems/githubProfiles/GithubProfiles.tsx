import React, { FC } from 'react';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './github-profiles.scss';
import SearchForm from './searchForm/SearchForm';
import UserCard from './userCard/UserCard';

const GithubProfiles: FC = () => (
  <ComponentWrapper>
    <div className="github-profiles__container">
      <SearchForm />

      <main>
        <LoaderWrapper
          wrapperStyle={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            padding: '3rem',
          }}
        >
          <UserCard />
        </LoaderWrapper>
      </main>
    </div>
  </ComponentWrapper>
);

export default GithubProfiles;
