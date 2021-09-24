import React, { FC } from 'react';

interface Props {
  title: string;
  onClick: (menuOpen: boolean) => void;
}

const MenuItem: FC<Props> = ({ title, onClick }) => (
  <li onClick={() => onClick(false)}>
    <a href={`#${title.toLowerCase()}`}>{title}</a>
  </li>
);

export default MenuItem;
