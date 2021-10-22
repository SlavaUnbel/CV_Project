import React, { FC } from 'react';
import { useChooseRandomTag, useWindowTitle } from '../../../utils/hooks';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './random-choice-picker.scss';

const RandomChoicePicker: FC = () => {
  useWindowTitle('Random Choice Picker');

  const { tagsRef, areaRef, handleKeyUp, handleClick } = useChooseRandomTag();

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
