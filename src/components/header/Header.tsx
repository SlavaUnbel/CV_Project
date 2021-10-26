import React, { FC, useContext } from 'react';
import { HeaderCtx } from '../../utils/context';
import { homePath } from '../../utils/route';
import './header.scss';
import HeaderItem from './headerItem/HeaderItem';
import HeaderMenuIcon from './headerMenuIcon/HeaderMenuIcon';

const Header: FC = () => {
  const { creds, menuOpen } = useContext(HeaderCtx);
  const { phone, email, linkedin } = creds;

  return (
    <div className={`header${menuOpen ? ' active' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <a href={homePath} className="logo">
            creative.
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
