import React, { FC } from 'react';

interface Props {
  disabledPrev: boolean;
  disabledNext: boolean;
  prev: () => void;
  next: () => void;
}

const ButtonNavigation: FC<Props> = ({
  disabledPrev,
  disabledNext,
  prev,
  next,
}) => (
  <div className="btn-group">
    <button disabled={disabledPrev} onClick={prev}>
      Prev
    </button>

    <button disabled={disabledNext} onClick={next}>
      Next
    </button>
  </div>
);

export default ButtonNavigation;
