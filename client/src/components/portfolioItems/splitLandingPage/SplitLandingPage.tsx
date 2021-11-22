import React, { FC, useContext } from 'react';
import { SplitLandingPageCtx } from '../../../utils/context';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import ContentWrapper from './contentWrapper/ContentWrapper';
import SidePage from './sidePage/SidePage';
import './split-landing-page.scss';

const SplitLandingPage: FC = () => {
  const { data } = useContext(SplitLandingPageCtx);

  return (
    <ComponentWrapper>
      <ContentWrapper>
        {data.map((page) => (
          <SidePage key={page.title} page={page} />
        ))}
      </ContentWrapper>
    </ComponentWrapper>
  );
};

export default SplitLandingPage;
