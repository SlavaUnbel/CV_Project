import { AssignmentTurnedIn, ContentCopy } from '@mui/icons-material';
import React, { FC, useContext } from 'react';
import { PasswordGeneratorCtx } from '../../../../utils/context';
import Button from '../../../utils/button/Button';

const Result: FC = () => {
  const { resultRef, passwordVal, copyPassword } =
    useContext(PasswordGeneratorCtx);

  return (
    <div className="result-container">
      <span className="result" ref={resultRef} />

      <Button onClick={copyPassword}>
        {passwordVal === resultRef.current?.innerText ? (
          <AssignmentTurnedIn />
        ) : (
          <ContentCopy />
        )}
      </Button>
    </div>
  );
};

export default Result;
