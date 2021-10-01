import React, { FC, HTMLAttributeAnchorTarget } from 'react';

interface Props {
  icon: JSX.Element;
  title: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

const HeaderItem: FC<Props> = ({ icon, title, href, target }) => (
  <div className="item-container">
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
    >
      {icon}

      <span>{title}</span>
    </a>
  </div>
);

export default HeaderItem;
