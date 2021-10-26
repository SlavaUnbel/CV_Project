import React, { FC } from 'react';

interface Props {
  cred: IHeaderCreds;
}

const HeaderItem: FC<Props> = ({ cred }) => (
  <div className="item-container">
    <a
      href={cred.href}
      target={cred.target}
      rel={cred.target === '_blank' ? 'noreferrer' : undefined}
    >
      {cred.icon}

      <span>{cred.title}</span>
    </a>
  </div>
);

export default HeaderItem;
