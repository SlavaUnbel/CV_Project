import { LinkedIn, Mail, Phone } from '@material-ui/icons';
import React, { FC } from 'react';
import { getMenuIconSpans } from '../../services/mock/databaseMethods';
import { email, linkedIn, phoneNumber } from '../../utils/constants';
import './header.scss';
import HeaderItem from './headerItem/HeaderItem';

interface Props {
  menuOpen: boolean;
  onClick: (menuOpen: boolean) => void;
}

const Header: FC<Props> = ({ menuOpen, onClick }) => {
  const spans = getMenuIconSpans();

  return (
    <div className={'header ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            creative.
          </a>

          <HeaderItem
            icon={<Phone className="icon" />}
            title={phoneNumber}
            href={`tel:${phoneNumber}`}
          />

          <HeaderItem
            icon={<Mail className="icon" />}
            title={email}
            href={`mailto:${email}`}
          />

          <HeaderItem
            icon={<LinkedIn className="icon" />}
            title="Slava Levkovich"
            href={linkedIn}
          />
        </div>

        <div className="right">
          <div className="collapsing-menu" onClick={() => onClick(!menuOpen)}>
            {spans.map((span) => (
              <span key={span} className={`line${span}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
