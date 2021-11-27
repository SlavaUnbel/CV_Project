import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FC, useContext } from 'react';

import { PortfolioCtx } from '../../../utils/context';

const PortfolioFilter: FC = () => {
  const { criteria, setCriteria, setActivePage } = useContext(PortfolioCtx);

  const changeCriteria = (e: SelectChangeEvent) => {
    setCriteria(e.target.value);
    setActivePage(1);
  };

  return (
    <div className="filter">
      <small>filter</small>

      <FormControl fullWidth className="form-control">
        <Select
          value={criteria}
          onChange={(e) => changeCriteria(e)}
          className="select"
        >
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
