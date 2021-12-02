import React, { FC, useEffect } from 'react';

import MovieApp from '../../components/portfolioItems/movieApp/MovieApp';
import { movieAppApi } from '../../utils/constants';
import { MovieAppCtx } from '../../utils/context';
import { useMovieAppSearch, useWindowTitle } from '../../utils/hooks';

interface Props {
  movies: IMovieApp[];
  getMovies: (url: string) => void;
}

const MovieAppContext: FC<Props> = ({ movies, getMovies }) => {
  useWindowTitle("Movie App");

  useEffect(() => {
    movieAppApi && getMovies(movieAppApi);
  }, [getMovies]);

  const { searchRef, submit } = useMovieAppSearch(getMovies);

  return (
    <MovieAppCtx.Provider
      value={{
        movies,
        getMovies,

        searchRef,
        submit,
      }}
    >
      <MovieApp />
    </MovieAppCtx.Provider>
  );
};

export default MovieAppContext;
