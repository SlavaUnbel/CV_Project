import React, { FC, useContext } from 'react';
import { RandomChoicePickerCtx } from '../../../utils/context';
import { useRandomChoicePickerOnMobile } from '../../../utils/hooks';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './random-choice-picker.scss';

const RandomChoicePicker: FC = () => {
  const { areaRef, tagsRef, handleKeyUp, chooseRandomTag } = useContext(
    RandomChoicePickerCtx,
  );

  const handleClick = useRandomChoicePickerOnMobile(areaRef, chooseRandomTag);

  return (
    <ComponentWrapper>
      <div className="random-choice-picker__container">
        <div className="random-choice-picker__wrapper">
          <h3>
            Enter all the choices divided by a comma (","). <br />
            Press enter when you're done.
          </h3>

          <Button onClick={handleClick}>Enter</Button>

          <textarea
            ref={areaRef}
            placeholder="Enter choices here..."
            id="textarea"
            onKeyUp={handleKeyUp}
          />

          <div className="tags" ref={tagsRef} />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default RandomChoicePicker;
