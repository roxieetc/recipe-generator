import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav.jsx';
import Home from './Components/Home.jsx';
import CategoryMeals from './Components/CategoryMeals.jsx';
import Recipes from './Components/Recipes.jsx';
import Random from './Components/Random.jsx';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories/:meals' element={<CategoryMeals />} />
      <Route path='/recipe/:recipe' element={<Recipes />} />
      <Route path='/random' element={<Random />} />
      </Routes>
    </>
  );
}

export default App;
