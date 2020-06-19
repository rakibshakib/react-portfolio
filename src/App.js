import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/side-menu/Menu';
import About from './components/about/About';



function App() {
  return (
    <>
      <Router>
        <Menu></Menu>

        <Switch>
        <Route path="/about">
          <About></About>
        </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
           <h2>Not Found</h2>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
