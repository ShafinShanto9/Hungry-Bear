import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Items from './pages/Items';
import CartPage from './pages/CartPage';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={ <HomePage/>} />
          <Route path='/item' element={ <Items/>} />
          <Route path='/cart' element={ <CartPage/>} />
          <Route path='/register' element={ <Register/>} />
          <Route path='/login' element={ <Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
