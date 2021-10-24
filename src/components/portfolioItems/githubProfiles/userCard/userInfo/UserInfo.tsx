import React, { FC } from 'react';

interface Props {
  user: IGithubUser;
  children: any;
}

const UserInfo: FC<Props> = ({ user, children }) => (
  <div className="user-info">
    <h2>{user.name}</h2>
    <p>{user.bio}</p>

    <ul>
      <li>
        {user.followers} <strong>Followers</strong>
      </li>
      <li>
        {user.following} <strong>Following</strong>
      </li>
      <li>
        {user.public_repos} <strong>Repos</strong>
      </li>
    </ul>

    {children}
  </div>
);

export default UserInfo;
