import React, { FC, useContext } from 'react';
import { MenuCtx } from '../../../utils/context';
import { useMenuRouter } from '../../../utils/hooks';

interface Props {
  title: string;
}

const MenuItem: FC<Props> = ({ title }) => {
  const { openCloseMenu } = useContext(MenuCtx);

  const redirect = useMenuRouter(title, openCloseMenu);

  return <li onClick={redirect}>{title}</li>;
};

export default MenuItem;
