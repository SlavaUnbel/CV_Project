import React, { FC } from 'react';
import Header from '../../components/header/Header';
import {
  getHeaderCreds,
  getMenuIconSpans,
} from '../../services/mock/databaseMethods';
import { HeaderCtx } from '../../utils/context';

interface Props {
  menuOpen: boolean;
  openCloseMenu: (menuOpen: boolean) => void;
}

const HeaderContext: FC<Props> = ({ menuOpen, openCloseMenu }) => {
  const spans = getMenuIconSpans();

  const creds = getHeaderCreds();

  return (
    <HeaderCtx.Provider value={{ spans, menuOpen, openCloseMenu, creds }}>
      <Header />
    </HeaderCtx.Provider>
  );
};

export default HeaderContext;
