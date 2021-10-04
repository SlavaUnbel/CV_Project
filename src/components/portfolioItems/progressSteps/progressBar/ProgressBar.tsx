import React, { FC } from 'react';
import Steps from './steps/Steps';

interface Props {
  progressStepsData: number[];
  width: string;
}

const ProgressBar: FC<Props> = ({ progressStepsData, width }) => (
  <div className="progress-container">
    <div className="progress" style={{ width }} />

    {progressStepsData.map((circle) => (
      <Steps key={circle} circle={circle} />
    ))}
  </div>
);

export default ProgressBar;
