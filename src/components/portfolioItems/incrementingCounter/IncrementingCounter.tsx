import { Facebook, Twitter, YouTube } from '@material-ui/icons';
import React, { FC } from 'react';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import CounterItem from './counterItem/CounterItem';
import './incrementing-counter.scss';

const IncrementingCounter: FC = () => {
  useWindowTitle('Incrementing Counter');

  return (
    <ComponentWrapper>
      <div className="incrementing-counter__container">
        <CounterItem
          icon={<Twitter className="icon" />}
          dataTarget={12000}
          title="Twitter Followers"
        />

        <CounterItem
          icon={<YouTube className="icon" />}
          dataTarget={5000}
          title="YouTube Subscribers"
        />

        <CounterItem
          icon={<Facebook className="icon" />}
          dataTarget={7500}
          title="Facebook Fans"
        />
      </div>
    </ComponentWrapper>
  );
};

export default IncrementingCounter;
