import React, { FC } from 'react';

interface Props {
  title: string;
  icon: JSX.Element;
}

const HeaderItem: FC<Props> = ({ title, icon }) => (
  <div className="item-container">
    {icon}

    <span>{title}</span>
  </div>
);

export default HeaderItem;
