import { FormatQuote } from '@mui/icons-material';
import React, { FC, useContext } from 'react';
import { TestimonialsSwitcherCtx } from '../../../utils/context';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './testimonials-switcher.scss';
import TestimonialWrapper from './testimonialWrapper/TestimonialWrapper';

const TestimonialsSwitcher: FC = () => {
  const { data } = useContext(TestimonialsSwitcherCtx);

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
