import React, { FC } from 'react';
import MovieApp from '../../components/portfolioItems/movieApp/MovieApp';
import { MovieAppCtx } from '../../utils/context';
import {
  useMovieAppApi,
  useMovieAppSearch,
  useWindowTitle,
} from '../../utils/hooks';

interface Props extends IWithLoading, IWithError, IWithWarning {
  movies: IMovieApp[];
  setMovies: (movies: IMovieApp[]) => void;
}

const MovieAppContext: FC<Props> = ({
  movies,
  setMovies,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Movie App');

  const getData = useMovieAppApi({
    setMovies,
    setLoading,
    pushError,
    pushWarning,
  });

  const { searchRef, submit } = useMovieAppSearch(getData);

  return (
    <MovieAppCtx.Provider
      value={{
        movies,
        setMovies,
        setLoading,

        pushError,
        pushWarning,

        searchRef,
        submit,
      }}
    >
      <MovieApp />
    </MovieAppCtx.Provider>
  );
};

export default MovieAppContext;
