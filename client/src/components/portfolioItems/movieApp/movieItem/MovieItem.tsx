import React, { FC } from 'react';
import { movieAppImagesApi } from '../../../../utils/constants';
import { convertFromYYYYMMDD } from '../../../../utils/date';

interface Props {
  movie: IMovieApp;
}

const MovieItem: FC<Props> = ({ movie }) => (
  <div className="movie">
    <img src={`${movieAppImagesApi}${movie.poster_path}`} alt={movie.title} />

    <div className="movie-info">
      <h3>{movie.title}</h3>
      <span
        className={
          movie.vote_average >= 8
            ? 'green'
            : movie.vote_average >= 5
            ? 'orange'
            : 'red'
        }
      >
        {movie.vote_average}
      </span>
    </div>

    <div className="overview">
      <h3>Overview</h3>
      {movie.overview}
      <h3>Release Date</h3>
      {convertFromYYYYMMDD(movie.release_date)}
    </div>
  </div>
);

export default MovieItem;
