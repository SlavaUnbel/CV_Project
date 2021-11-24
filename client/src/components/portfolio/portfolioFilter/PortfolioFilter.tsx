import { FormControl, MenuItem, Select } from '@mui/material';
import React, { FC, useContext } from 'react';

import { PortfolioCtx } from '../../../utils/context';

const PortfolioFilter: FC = () => {
  const { criteria, setCriteria } = useContext(PortfolioCtx);

  return (
    <div className="filter">
      <FormControl fullWidth>
        <Select value={criteria} onChange={(e) => setCriteria(e.target.value)}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="featured">Featured</MenuItem>
          <MenuItem value="UI">UI</MenuItem>
          <MenuItem value="sideAPI">Side API</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PortfolioFilter;
