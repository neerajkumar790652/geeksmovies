
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../MyContext/MyContext';


const MovieDetails = () => {
  const { imdbID } = useParams();
  const { movies } = useContext(MyContext);

  const movie = movies.find((movie) => movie.imdbID === imdbID);

  return (
    <div className='movie-detail'>
      {movie ? (
        <div className='details'>
          <div className='poster'><img src={movie.Poster}/></div>
           <div className='info'><h1>{movie.Title}</h1>
           <h2>Release Date: {movie.Year}</h2>
          <h2>Movie type: {movie.Type}</h2>
           </div>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
};

export default MovieDetails;

