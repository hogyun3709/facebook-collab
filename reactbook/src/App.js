import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import SearchBar from "./Header/SearchBar/SearchBar";
import Account from "./Header/Account/Account";
import Home from "./Header/Menu/Home";
import User from "./Header/Menu/User";
import Friends from "./Header/Menu/Friends";
import Create from "./Header/Menu/Create";
import Notice from "./Header/Notice/Notice";

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <div className="App-header-wrap">
          <Route path="/" component={SearchBar} />
          <div className="side-menu-wrap">
              <Route path="/" component={Account} />
              <Route path="/" component={Notice} />
          </div>
        </div>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/User" component={User} />
      <Route path="/Friends" component={Friends} />
      <Route path="/Create" component={Create} />
    </Router>
  );
}
export default App;
