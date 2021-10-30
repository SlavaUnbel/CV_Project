import { Email, Home, Person } from '@mui/icons-material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { contactPath, homePath, portfolioPath } from '../../../../utils/route';

const NavigationBar: FC = () => (
  <nav>
    <ul>
      <li>
        <Link to={homePath}>
          <Home /> Home
        </Link>
      </li>

      <li>
        <Link to={portfolioPath}>
          <Person /> About
        </Link>
      </li>

      <li>
        <Link to={contactPath}>
          <Email /> Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
