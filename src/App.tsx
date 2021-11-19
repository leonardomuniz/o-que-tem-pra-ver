import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Films from './pages/movie';
import Search from './pages/search';
import './styles/global.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Films />}>
          <Route path=":moviesId" element={<Films />} />
        </Route>
        <Route path="search" element={<Search />} />
      </Routes>
  );
}

export default App;
