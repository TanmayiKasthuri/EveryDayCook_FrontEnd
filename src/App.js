import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import RecipePage from './Components/RecipePage';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeFinder from './Components/RecipeFinder';
import Header from './Components/Header';

function App() {

  // const [recipes, setRecipes] = useState([])

  // useEffect(() => {
  //   setRecipes(RecipeService.getAllRecipes());
  //   console.log(recipes); // Should log null
  // }, []);

  return (
    <>
    
        <Header></Header>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/recipefinder' element={<RecipeFinder/>} />
          <Route path="/recipe/:id" element={<RecipePage showDetail={true} />} />
        </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;
