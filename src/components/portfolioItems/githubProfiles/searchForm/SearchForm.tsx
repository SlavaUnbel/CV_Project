import { Search } from '@material-ui/icons';
import React, { FC, FormEvent, RefObject } from 'react';

interface Props {
  searchRef: RefObject<HTMLInputElement>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchForm: FC<Props> = ({ searchRef, onSubmit }) => (
  <form className="user-form" onSubmit={(e) => onSubmit(e)}>
    <input placeholder="Look up for a GitHub User" ref={searchRef} />

    <button>
      <Search className="icon" />
    </button>
  </form>
);

export default SearchForm;
