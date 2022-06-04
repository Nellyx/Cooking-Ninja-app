import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Create from "./pages/create/Create";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/recipe/:id" element={<Recipe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
