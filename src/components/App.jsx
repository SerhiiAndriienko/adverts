import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hero from './component/Hero/Hero';
import Home from './pages/home/Home';
import Cars from './pages/cars/Cars';
// import Movies from './pages/movies/Movies';
import NotFound from './pages/notFound/NotFound';
import Header from './component/header/Header';

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/movies/:movieId" element={<Hero />}></Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
      </Routes>
    </main>
  );
};
