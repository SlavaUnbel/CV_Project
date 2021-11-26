import './header.scss';

import React, { FC, useContext } from 'react';

import { cvReference } from '../../utils/constants';
import { HeaderCtx } from '../../utils/context';
import HeaderItem from './headerItem/HeaderItem';
import HeaderMenuIcon from './headerMenuIcon/HeaderMenuIcon';

const Header: FC = () => {
  const { creds, menuOpen } = useContext(HeaderCtx);
  const { phone, email, linkedin } = creds;

  return (
    <div className={`header${menuOpen ? " active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href={cvReference} className="cv" target="_blank" rel="noreferrer">
            my cv.
          </a>

          <HeaderItem cred={phone} />

          <HeaderItem cred={email} />

          <HeaderItem cred={linkedin} />
        </div>

        <HeaderMenuIcon />
      </div>
    </div>
  );
};

export default Header;
