import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "./Pages/Home";
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';
import AllBeers from "./Pages/AllBeers";
import OneBeer from "./Pages/OneBeer";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="beers/:id" element={<OneBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        {/* 
        <Route path="/new-beer" element={<NewBeer />}>
          <Route path="random-beer" element={<RandomBeer />} />
        </Route> */}

      </Routes>

      {/* <Home /> */}
    </div>
  );
}

export default App;
