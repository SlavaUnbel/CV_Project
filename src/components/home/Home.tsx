import React, { FC } from 'react';
import { avatarSrc, downSrc } from '../../utils/constants';
import { useITypedLib, useWindowTitle } from '../../utils/hooks';
import { portfolioPath } from '../../utils/route';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import './home.scss';

const Home: FC = () => {
  useWindowTitle();

  const textRef = useITypedLib();

  return (
    <ComponentWrapper>
      <div className="home">
        <div className="left">
          <div className="img-container">
            <img src={avatarSrc} alt="" />
          </div>
        </div>

        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>

            <h1>Slava Levkovich</h1>

            <h3>
              <span ref={textRef} />
            </h3>
          </div>

          <a href={portfolioPath}>
            <img src={downSrc} alt="" />
          </a>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Home;
