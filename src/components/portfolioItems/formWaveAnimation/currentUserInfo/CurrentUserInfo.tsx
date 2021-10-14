import React, { FC } from 'react';

interface Props {
  info?: string;
  role?: string;
}

const CurrentUserInfo: FC<Props> = ({ info, role }) => (
  <div
    className={`user-info ${
      info && info.split(' ')[0] === 'No' ? 'no-data' : ''
    }`}
  >
    <h4>{info}</h4>
    {role && <h4>{role}</h4>}
  </div>
);

export default CurrentUserInfo;
