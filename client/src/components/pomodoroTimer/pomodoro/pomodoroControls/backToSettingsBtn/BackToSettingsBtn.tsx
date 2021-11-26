import { ArrowBack } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { FC, useContext } from 'react';

import { PomodoroTimerCtx } from '../../../../../utils/context';

const BackToSettingsBtn: FC = () => {
  const { settingBtn } = useContext(PomodoroTimerCtx);

  return (
    <Tooltip title="Back to timer settings" placement="right">
      <IconButton className="icon-btn back-icon" onClick={settingBtn}>
        <ArrowBack />
      </IconButton>
    </Tooltip>
  );
};

export default BackToSettingsBtn;
