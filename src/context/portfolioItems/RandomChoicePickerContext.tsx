import React, { FC } from 'react';
import RandomChoicePicker from '../../components/portfolioItems/randomChoicePicker/RandomChoicePicker';
import { RandomChoicePickerCtx } from '../../utils/context';
import { useChooseRandomTag, useWindowTitle } from '../../utils/hooks';

const RandomChoicePickerContext: FC = () => {
  useWindowTitle('Random Choice Picker');

  const { tagsRef, areaRef, handleKeyUp, chooseRandomTag } =
    useChooseRandomTag();

  return (
    <RandomChoicePickerCtx.Provider
      value={{ tagsRef, areaRef, handleKeyUp, chooseRandomTag }}
    >
      <RandomChoicePicker />
    </RandomChoicePickerCtx.Provider>
  );
};

export default RandomChoicePickerContext;
