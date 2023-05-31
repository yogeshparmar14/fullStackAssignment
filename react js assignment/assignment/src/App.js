 
import './App.css';

import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import MovieCart from './MovieCart';
function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieCart />}>
           
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
