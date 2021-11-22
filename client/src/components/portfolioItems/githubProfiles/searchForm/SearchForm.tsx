import { Search } from '@mui/icons-material';
import React, { FC, useContext } from 'react';
import { GithubProfilesCtx } from '../../../../utils/context';

const SearchForm: FC = () => {
  const { searchRef, submitSearch } = useContext(GithubProfilesCtx);

  return (
    <form className="user-form" onSubmit={(e) => submitSearch(e)}>
      <input placeholder="Look up for a GitHub User" ref={searchRef} />

      <button>
        <Search className="icon" />
      </button>
    </form>
  );
};

export default SearchForm;
