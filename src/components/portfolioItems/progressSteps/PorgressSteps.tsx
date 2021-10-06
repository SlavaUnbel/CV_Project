import React, { FC } from 'react';
import {
  useButtonNavigation,
  useFetchProgressStepsData,
  useWindowTitle,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Loader from '../../utils/loader/Loader';
import ButtonNavigation from './buttonNavigation/ButtonNavigation';
import './progress-steps.scss';
import ProgressBar from './progressBar/ProgressBar';

interface Props extends IWithLoading, IWithError, IWithWarning {
  progressStepsData: number[];
  setProgressStepsData: (progressStepsData: number[]) => void;

  progressStepsWidth: string;
  setProgressStepsWidth: (progressStepsWidth: string) => void;

  currentProgressStep: number;
  setCurrentProgressStep: (currentProgressStep: number) => void;
}

const ProgressSteps: FC<Props> = ({
  progressStepsData,
  setProgressStepsData,

  progressStepsWidth,
  setProgressStepsWidth,

  currentProgressStep,
  setCurrentProgressStep,

  loading,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Progress Steps');

  useFetchProgressStepsData({
    setProgressStepsData,
    setLoading,
    pushError,
    pushWarning,
  });

  const { ref, prev, next } = useButtonNavigation({
    currentProgressStep,
    setCurrentProgressStep,
    setProgressStepsWidth,
  });

  return (
    <ComponentWrapper>
      {!loading ? (
        <div className="progress-steps__container" ref={ref}>
          <ProgressBar
            progressStepsData={progressStepsData}
            width={progressStepsWidth}
          />

          <ButtonNavigation
            disabledPrev={currentProgressStep === progressStepsData[0]}
            disabledNext={
              currentProgressStep ===
              progressStepsData[progressStepsData.length - 1]
            }
            prev={prev}
            next={next}
          />
        </div>
      ) : (
        <Loader />
      )}
    </ComponentWrapper>
  );
};

export default ProgressSteps;
