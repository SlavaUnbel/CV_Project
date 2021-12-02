import './testimonials-switcher.scss';

import { FormatQuote } from '@mui/icons-material';
import React, { FC } from 'react';

import { useFetchTestimonialsSwitcherData, useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import TestimonialWrapper from './testimonialWrapper/TestimonialWrapper';

interface Props {
  data: ITestimonialsSwitcher;
  getData: (id: number) => void;
}

const TestimonialsSwitcher: FC<Props> = ({ data, getData }) => {
  useWindowTitle("Testimonials Switcher");

  useFetchTestimonialsSwitcherData(getData);

  return (
    <ComponentWrapper>
      <div className="testimonials-switcher__container">
        <div className="testimonial-wrapper">
          <div className="progress-bar" />

          <FormatQuote className="icon left" />
          <FormatQuote className="icon right" />

          <TestimonialWrapper>
            <p className="testimonial">{data.testimonial}</p>

            <div className="user">
              <img src={data.avatar} alt="user" className="avatar" />

              <div className="user-details">
                <h4 className="username">{data.username}</h4>
                <p className="role">{data.role}</p>
              </div>
            </div>
          </TestimonialWrapper>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default TestimonialsSwitcher;
