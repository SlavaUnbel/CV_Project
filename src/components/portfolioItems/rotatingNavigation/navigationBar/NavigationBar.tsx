import { Email, Home, Person } from '@material-ui/icons';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { contactPath, homePath, portfolioPath } from '../../../../utils/route';

const NavigationBar: FC = () => {
  const history = useHistory();

  return (
    <nav>
      <ul>
        <li onClick={() => history.push(homePath)}>
          <Home /> Home
        </li>

        <li onClick={() => history.push(portfolioPath)}>
          <Person /> About
        </li>

        <li onClick={() => history.push(contactPath)}>
          <Email /> Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
