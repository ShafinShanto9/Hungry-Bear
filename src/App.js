import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Items from './pages/Items';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={ <HomePage/>} />
          <Route path='/item' element={ <Items/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
