import React, { FC } from 'react';

interface Props {
  title: string;
  icon: JSX.Element;
  href: string;
}

const HeaderItem: FC<Props> = ({ title, icon, href }) => (
  <div className="item-container">
    <a href={href} target="_blank" rel="noreferrer">
      {icon}

      <span>{title}</span>
    </a>
  </div>
);

export default HeaderItem;
