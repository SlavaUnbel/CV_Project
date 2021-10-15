import React, { FC } from 'react';
import { useRedirectToItem } from '../../../utils/hooks';

interface Props {
  item: IWorks;
}

const WorkCard: FC<Props> = ({ item }) => {
  const redirect = useRedirectToItem(item.link);

  return (
    <div className="container">
      <div className="item" onClick={redirect}>
        <div className="left">
          <div className="left-container">
            <div className="img-container">
              <img src={item.iconSrc} alt="" />
            </div>

            <h2>{item.title}</h2>

            <p>{item.description}</p>
          </div>
        </div>

        <div className="right">
          <img src={item.imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
