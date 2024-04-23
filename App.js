import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import './style.css';
import MyArticle from './components/MyArticle';
import BlogPage from './pages/Blog';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MyTable from './pages/MyTable';
import ProductsPage from './pages/Products';
import MyNavBar from './components/MyNavBar';

// Define the App component
function App() {
  // State variables for visibility of each section
  const [isVisible, setIsVisible] = useState([true, true, true, true, true, true, true, true, true]);

  // State variable for dynamic text
  const [myText , setMyText] = useState('Joshua Rice');

  // State variable for demonstration of useState with different types
  const [myNum , setMyNum] = useState(1);

  // Function to toggle visibility of a section based on index
  const toggleVisibility = (index) => {
    // Create a copy of isVisible array
    const updatedVisibility = [...isVisible];
    // Toggle the visibility of the section at the given index
    updatedVisibility[index] = !updatedVisibility[index];
    // Update the state with the new visibility array
    setIsVisible(updatedVisibility);
  };

  // Return JSX markup to render the application UI
  return (
    <>
      {/* Define BrowserRouter to enable routing */}
      <BrowserRouter>
        {/* Include navigation bar */}
        <MyNavBar>
          {/* Define routes for different pages */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Blog' element={<BlogPage />} />
            <Route path='/Products' element={<ProductsPage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/MyTable' element={<MyTable />} />
          </Routes>
        </MyNavBar>
      </BrowserRouter>
      
      {/* Button and section for React Components / Props lesson 1 & 2 */}
      <button onClick={() => toggleVisibility(0)}>React Components / Props lesson 1 & 2</button>
      {isVisible[0] && (
        <div>
          <h1>React Components / Props lesson 1 & 2</h1>
          <MyArticle 
            title="My First Article"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem eos quasi libero sed debitis blanditiis culpa, laudantium nesciunt aliquam atque explicabo alias temporibus amet ullam ducimus suscipit sit porro!"
          />
        </div>
      )}

      {/* Button and section for React UseState */}
      <button onClick={() => toggleVisibility(1)}>React UseState</button>
      {isVisible[1] && (
        <div>
          <h1>React UseState</h1>
          <button onClick={() => toggleVisibility(1)}>Click Me!</button>
          {isVisible[1] && <h2>Hello World</h2>}
        </div>
      )}

      {/* Button and section for Mastering Syntax */}
      <button onClick={() => toggleVisibility(2)}>Mastering Syntax: Working the Function as Second the Parameter of useState Hook</button>
      {isVisible[2] && (
        <div>
          <h1>Mastering Syntax: Working the Function as Second the Parameter of useState Hook</h1>
          <h2>{myText}</h2>
          <button onClick={() => setMyText('Sarah Rice')}>Click Me!</button>
        </div>
      )}

      {/* Section for Plain JavaScript VS. React.js */}
      <button onClick={() => toggleVisibility(5)}>Plain JavaScript VS. React.js: Working with Variables</button>
      {isVisible[5] && 
      <div>
        <h1>Plain JavaScript VS. React.js: Working with Variables (Numbers)</h1>
        <button onClick={() => setMyNum(myNum * 2)}>Click Me!</button>
        <h2>{myNum}</h2>
      </div>}
    </>
  );
}

export default App;
