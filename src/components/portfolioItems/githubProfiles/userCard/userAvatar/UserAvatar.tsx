import React, { FC } from 'react';

interface Props {
  user: IGithubUser;
}

const UserAvatar: FC<Props> = ({ user }) => (
  <div>
    <img
      alt={user.name}
      className="avatar"
      src={user.avatar_url}
      onClick={() => window.open(user.html_url)}
    />
  </div>
);

export default UserAvatar;
