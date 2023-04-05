import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBanner from "./first";
import MovieList from "./Movies";
import { Home } from "./Home";
import NavBar from "./NavBar";
import { Podcasts } from "./Podcasts";
//test
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="MovieList" element={<MovieList />}></Route>
          <Route path="Podcasts" element={<Podcasts />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
