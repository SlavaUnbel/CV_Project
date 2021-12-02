import React, { FC, useContext } from 'react';

import { GithubProfilesCtx } from '../../../../utils/context';
import UserAvatar from './userAvatar/UserAvatar';
import UserInfo from './userInfo/UserInfo';
import UserRepos from './userRepos/UserRepos';

const UserCard: FC = () => {
  const { user, repos, noUserFound, searchForAUser } =
    useContext(GithubProfilesCtx);

  return (
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
};

export default UserCard;
