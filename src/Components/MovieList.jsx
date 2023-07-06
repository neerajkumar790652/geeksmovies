import React, { useContext } from 'react';
import MyContext from '../MyContext/MyContext';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const { movies, setSearch,setButton,search,button } = useContext(MyContext); 


//   console.log(movies);

  return (
    <>
      <div className='geek-search'>
        <h1>Geeks Movies App</h1>
        <input type="text" placeholder="Enter the Movie Name" onChange={(e)=>{
            setSearch(e.target.value)
        }} />
        <button onClick={()=>{
            console.log("hello")
            
            setButton(search)
            setSearch("")
            }}>Search</button>
      </div>
      <div className="movie-posters">
        {movies.map((movie) => (
          <div className='container' key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`} >
            <img src={movie.Poster} alt={movie.Title} />
          </Link>
          </div>
        ))}
        {/* {movies.map((element)=>{
            return(
                <>
                <h1>{element.Title}</h1>
                </>
            )
        })} */}
      </div>
    </>
  );
};

export default MovieList;
