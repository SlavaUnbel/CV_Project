import './not-found.scss';

import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { notFoundSrc } from '../../utils/constants';
import { useWindowTitle } from '../../utils/hooks';
import { homePath } from '../../utils/route';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';

const NotFound: FC = () => {
  useWindowTitle("404 Page");

  const navigate = useNavigate();

  return (
    <ComponentWrapper>
      <div className="not-found__container">
        <img src={notFoundSrc} alt="" />

        <div className="content-wrapper">
          <h1>Oops!</h1>

          <p>There is no page you are looking for.</p>

          <div className="link">
            <Link to={homePath}>Return to homepage</Link>
          </div>

          <div className="link">
            <span onClick={() => navigate(-1)}>Go back</span>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default NotFound;
