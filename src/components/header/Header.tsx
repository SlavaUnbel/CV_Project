import { LinkedIn, Mail, Phone } from '@material-ui/icons';
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
            icon={<Phone className="icon" />}
            title="+375 (44) 576-64-29"
          />

          <HeaderItem
            icon={<Mail className="icon" />}
            title="slavlen1999@gmail.com"
          />

          <HeaderItem
            icon={<LinkedIn className="icon" />}
            title="Slava Levkovich  "
          />
        </div>

        <div className="right">
          <div className="collapsing-menu" onClick={() => onClick(!menuOpen)}>
            {new Array(3).fill(1).map((_, idx) => (
              <span key={idx} className={`line${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
