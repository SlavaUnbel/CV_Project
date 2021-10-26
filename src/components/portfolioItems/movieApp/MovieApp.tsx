import React, { FC, useContext } from 'react';
import { MovieAppCtx } from '../../../utils/context';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './movie-app.scss';
import MovieItem from './movieItem/MovieItem';

const MovieApp: FC = () => {
  const { movies, searchRef, submit } = useContext(MovieAppCtx);

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
