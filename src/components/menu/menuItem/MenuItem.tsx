import React, { FC } from 'react';
import { useMenuRouter } from '../../../utils/hooks';

interface Props {
  title: string;
}

const MenuItem: FC<Props> = ({ title }) => {
  const redirect = useMenuRouter(title);

  return <li onClick={redirect}>{title}</li>;
};

export default MenuItem;
