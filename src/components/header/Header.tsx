import { LinkedIn, Mail, Phone } from '@mui/icons-material';
import React, { FC } from 'react';
import { getMenuIconSpans } from '../../services/mock/databaseMethods';
import { email, linkedIn, phoneNumber } from '../../utils/constants';
import { contactPath, homePath } from '../../utils/route';
import './header.scss';
import HeaderItem from './headerItem/HeaderItem';

interface Props {
  menuOpen: boolean;
  openCloseMenu: (menuOpen: boolean) => void;
}

const Header: FC<Props> = ({ menuOpen, openCloseMenu }) => {
  const spans = getMenuIconSpans();

  return (
    <div className={`header${menuOpen ? ' active' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <a href={homePath} className="logo">
            creative.
          </a>

          <HeaderItem
            icon={<Phone className="icon" />}
            title={phoneNumber}
            href={`tel:${phoneNumber}`}
            target="_blank"
          />

          <HeaderItem
            icon={<Mail className="icon" />}
            title={email}
            href={contactPath}
          />

          <HeaderItem
            icon={<LinkedIn className="icon" />}
            title="Slava Levkovich"
            href={linkedIn}
            target="_blank"
          />
        </div>

        <div className="right">
          <div
            className="collapsing-menu"
            onClick={() => openCloseMenu(!menuOpen)}
          >
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
