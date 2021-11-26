import './menu.scss';

import React, { FC, useContext } from 'react';

import { MenuCtx } from '../../utils/context';
import MenuItem from './menuItem/MenuItem';

const Menu: FC = () => {
  const { options, menuOpen } = useContext(MenuCtx);

  return (
    <div className={`menu${menuOpen ? " active" : ""}`}>
      <ul>
        {options.map((option) => (
          <MenuItem key={option} title={option} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
