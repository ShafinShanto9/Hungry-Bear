import logo from './logo.svg';

import 'antd/dist/antd.css';
import { Button } from 'antd';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Items from './pages/Items';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/homepage' element={ <HomePage/>} />
          <Route path='/item' element={ <Items/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
