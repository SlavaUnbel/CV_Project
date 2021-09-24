import React, { FC } from 'react';
import './menu.scss';
import MenuItem from './menuItem/MenuItem';

interface Props {
  menuOpen: boolean;
  onClick: (menuOpen: boolean) => void;
}

const Menu: FC<Props> = ({ menuOpen, onClick }) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <MenuItem title="Home" onClick={onClick} />

        <MenuItem title="Portfolio" onClick={onClick} />

        <MenuItem title="Works" onClick={onClick} />

        <MenuItem title="Testimonials" onClick={onClick} />

        <MenuItem title="Contact" onClick={onClick} />
      </ul>
    </div>
  );
};

export default Menu;
