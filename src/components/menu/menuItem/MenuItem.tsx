import React, { FC } from 'react';
import { useMenuRouter } from '../../../utils/hooks';

interface Props {
  title: string;
  openCloseMenu: (menuOpen: boolean) => void;
}

const MenuItem: FC<Props> = ({ title, openCloseMenu }) => {
  const redirect = useMenuRouter(title, openCloseMenu);

  return <li onClick={redirect}>{title}</li>;
};

export default MenuItem;
