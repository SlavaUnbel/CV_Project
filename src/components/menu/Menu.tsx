import React, { FC } from 'react';
import { getMenuOptions } from '../../services/mock/databaseMethods';
import './menu.scss';
import MenuItem from './menuItem/MenuItem';

interface Props {
  menuOpen: boolean;
  openCloseMenu: (menuOpen: boolean) => void;
}

const Menu: FC<Props> = ({ menuOpen, openCloseMenu }) => {
  const data = getMenuOptions();

  return (
    <div className={`menu${menuOpen ? ' active' : ''}`}>
      <ul>
        {data.map((item) => (
          <MenuItem key={item} title={item} openCloseMenu={openCloseMenu} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
