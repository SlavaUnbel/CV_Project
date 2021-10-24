import React, { FC } from 'react';
import UserAvatar from './userAvatar/UserAvatar';
import UserInfo from './userInfo/UserInfo';
import UserRepos from './userRepos/UserRepos';

interface Props {
  user: IGithubUser;
  repos: IGithubRepo[];
  noUserFound: boolean;
  searchForAUser: boolean;
}

const UserCard: FC<Props> = ({ user, repos, noUserFound, searchForAUser }) => (
  <div className="card">
    {noUserFound ? (
      <h1>No profile with this username</h1>
    ) : searchForAUser ? (
      <h1>GitHub user's info goes here</h1>
    ) : (
      <>
        <UserAvatar user={user} />

        <UserInfo user={user}>
          <UserRepos repos={repos} />
        </UserInfo>
      </>
    )}
  </div>
);

export default UserCard;
