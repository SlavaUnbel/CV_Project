import React, { FC } from 'react';
import Menu from '../../components/menu/Menu';
import { getMenuOptions } from '../../services/mock/databaseMethods';
import { MenuCtx } from '../../utils/context';

interface Props {
  menuOpen: boolean;
  openCloseMenu: (menuOpen: boolean) => void;
}

const MenuContext: FC<Props> = ({ menuOpen, openCloseMenu }) => {
  const options = getMenuOptions();

  return (
    <MenuCtx.Provider value={{ options, menuOpen, openCloseMenu }}>
      <Menu />
    </MenuCtx.Provider>
  );
};

export default MenuContext;
