import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Movie from './pages/movie';
import Search from './pages/search';
import './styles/global.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/search" element={<Search />} />
      </Routes>
  );
}

export default App;
