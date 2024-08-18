// import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  // const [movies, setMovies] = useState([
  //   {
  //     title: 'Pitch perfect',
  //     description: 'The Barden Bellas girls always know how to put on a show with their killer vocals',
  //     posterURL: 'https://youtu.be/kklxyvig-GA?si=mFxYn57B_7MjtaZZ',
  //     rating: 9.8
  //   },
  // ]);

  // const handleAddMovie = (movie) => {
  //   setMovies([...movies, movie]);
  // };

  // const handleFilter = (filter) => {
  //   const { title, rating } = filter;
  //   let filteredMovies = movies;

  //   if (title) {
  //     filteredMovies = filteredMovies.filter(movie => 
  //       movie.title.toLowerCase().includes(title.toLowerCase())
  //     );
  //   }

  //   if (rating) {
  //     filteredMovies = filteredMovies.filter(movie => 
  //       movie.rating >= rating
  //     );
  //   }

  //   setMovies(filteredMovies);
  // };
  <div>
      <h1>My Movie App</h1>
      {/* <Filter onFilter={handleFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={movies} /> */}
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path="/movie" element={<AddMovie />} />
        <Route path="/movielist" element={<MovieList movie={App}/>} />
      </Routes>
 </div>
}

export default App;