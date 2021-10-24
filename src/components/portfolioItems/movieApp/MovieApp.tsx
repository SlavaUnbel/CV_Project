import React, { FC } from 'react';
import {
  useMovieAppApi,
  useMovieAppSearch,
  useWindowTitle,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './movie-app.scss';
import MovieItem from './movieItem/MovieItem';

interface Props extends IWithLoading, IWithError, IWithWarning {
  movies: IMovieApp[];
  setMovies: (movies: IMovieApp[]) => void;
}

const MovieApp: FC<Props> = ({
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
    <ComponentWrapper>
      <div className="movie-app__container">
        <header>
          <h1>Movie App</h1>

          <form onSubmit={submit}>
            <input className="search" placeholder="Search" ref={searchRef} />
          </form>
        </header>

        <main>
          <LoaderWrapper>
            {movies.map((movie, idx) => (
              <MovieItem key={idx} movie={movie} />
            ))}
          </LoaderWrapper>
        </main>
      </div>
    </ComponentWrapper>
  );
};

export default MovieApp;
