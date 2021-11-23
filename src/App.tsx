import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Films from './pages/movie';
import Search from './pages/search';
import MovieList from './pages/MovieList';
import GenreList from './pages/genreList';
import './styles/global.css'

function App() {
  document.title = 'O que tem pra ver ?';
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Films />}>
          <Route path=":moviesId" element={<Films />} />
        </Route>
        <Route path="/search" element={<Search />} />
        <Route path="/search/result/:searchParams" element={<MovieList />} />
        <Route path="/genres" element={<GenreList />} />
      </Routes>
  );
}

export default App;
