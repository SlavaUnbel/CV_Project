import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { avatarSrc, downSrc } from '../../utils/constants';
import {
  useITypedLib,
  useRedirectToItem,
  useWindowTitle,
} from '../../utils/hooks';
import { portfolioPath } from '../../utils/route';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import './home.scss';

const Home: FC = () => {
  useWindowTitle('Homepage');

  const textRef = useITypedLib();

  const redirect = useRedirectToItem(portfolioPath);

  return (
    <ComponentWrapper>
      <div className="home" onWheel={redirect}>
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
            <img src={downSrc} alt="" />
          </Link>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Home;
