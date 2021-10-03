import React, { FC } from 'react';
import { getMenuOptions } from '../../services/mock/databaseMethods';
import './menu.scss';
import MenuItem from './menuItem/MenuItem';

interface Props {
  menuOpen: boolean;
}

const Menu: FC<Props> = ({ menuOpen }) => {
  const data = getMenuOptions();

  return (
    <div className={`menu${menuOpen ? ' active' : ''}`}>
      <ul>
        {data.map((item, idx) => (
          <MenuItem key={idx} title={item} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
