import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../../utils/context';

const CurrentUserInfo: FC = () => {
  const { currentUserInfo, currentUserRole } = useContext(AuthProjectCtx);

  return (
    <div
      className={`user-info ${
        currentUserInfo && currentUserInfo.split(' ')[0] === 'No'
          ? 'no-data'
          : currentUserInfo && currentUserInfo.split(' ')[0] === 'Refresh'
          ? 'proceed'
          : ''
      }`}
    >
      <h4>{currentUserInfo}</h4>

      {currentUserRole && <h4>{currentUserRole}</h4>}
    </div>
  );
};

export default CurrentUserInfo;
