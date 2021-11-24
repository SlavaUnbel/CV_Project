import './home.scss';

import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import { avatarSrc } from '../../utils/constants';
import { HomeCtx } from '../../utils/context';
import { portfolioPath } from '../../utils/route';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';

const Home: FC = () => {
  const { textRef, onWheel } = useContext(HomeCtx);

  return (
    <ComponentWrapper>
      <div className="home" onWheel={onWheel}>
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

          <Link to={portfolioPath}>
            <div className="scroll" />
          </Link>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Home;
