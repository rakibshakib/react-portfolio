import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/side-menu/Menu';



function App() {
  return (
    <div className="App">
    <Menu></Menu>
     <Home></Home>
    </div>
  );
}

export default App;
