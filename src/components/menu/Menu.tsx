import React, { FC } from 'react';
import { getMenuOptions } from '../../services/mock/databaseMethods';
import './menu.scss';
import MenuItem from './menuItem/MenuItem';

interface Props {
  menuOpen: boolean;
  onClick: (menuOpen: boolean) => void;
}

const Menu: FC<Props> = ({ menuOpen, onClick }) => {
  const data = getMenuOptions();

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        {data.map((item, idx) => (
          <MenuItem key={idx} title={item} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
