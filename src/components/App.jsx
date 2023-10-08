import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favourite from './pages/favourite/Favourite';
import Home from './pages/home/Home';
import Cars from './pages/cars/Cars';
import NotFound from './pages/notFound/NotFound';
import Header from './component/header/Header';

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/favourite" element={<Favourite />}></Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
      </Routes>
    </main>
  );
};
