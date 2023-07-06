import {Routes,Route} from 'react-router-dom'
import './App.css'
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
      </Routes>  
        
    </>
  )
}

export default App
