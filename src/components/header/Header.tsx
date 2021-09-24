import { Mail, Person } from '@material-ui/icons';
import React, { FC } from 'react';
import './header.scss';
import HeaderItem from './headerItem/HeaderItem';

interface Props {
  menuOpen: boolean;
  onClick: (menuOpen: boolean) => void;
}

const Header: FC<Props> = ({ menuOpen, onClick }) => {
  return (
    <div className={'header ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            creative.
          </a>

          <HeaderItem
            icon={<Person className="icon" />}
            title="+375 29 333-98-06"
          />

          <HeaderItem
            icon={<Mail className="icon" />}
            title="slavlen1999@gmail.com"
          />
        </div>

        <div className="right">
          <div className="collapsing-menu" onClick={() => onClick(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
