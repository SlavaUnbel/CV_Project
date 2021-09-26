import React, { FC } from 'react';

interface Props {
  item: IWorks;
}

const WorkCard: FC<Props> = ({ item }) => (
  <div className="container">
    <div className="item">
      <div className="left">
        <div className="left-container">
          <div className="img-container">
            <img src={item.iconSrc} alt="" />
          </div>

          <h2>{item.title}</h2>

          <p>{item.description}</p>

          <span>Projects</span>
        </div>
      </div>

      <div className="right">
        <img src={item.imgSrc} alt="" />
      </div>
    </div>
  </div>
);

export default WorkCard;
