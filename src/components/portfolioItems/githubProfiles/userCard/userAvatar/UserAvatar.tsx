import React, { FC } from 'react';

interface Props {
  user: IGithubUser;
}

const UserAvatar: FC<Props> = ({ user }) => (
  <div className="img-wrapper">
    <a href={user.html_url} target="_blank" rel="noreferrer" className="link">
      <img alt={user.name} className="avatar" src={user.avatar_url} />
    </a>
  </div>
);

export default UserAvatar;
