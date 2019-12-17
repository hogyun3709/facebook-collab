import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/header/searchBar/SearchBarIndex";
import Account from "./components/header/account/Account";
// import Home from "./components/header/menu/Home";
// import User from "./components/header/menu/User";
// import Friends from "./components/header/menu/Friends";
// import Create from "./components/header/menu/Create";
import Notice from "./components/header/notice/Notice";
import NewsFeed from "./components/newsFeed/NewsFeedIndex";
import WidgetIndex from "./components/widget/WidgetIndex";


function App() {
  return (
    <div className="App-container">
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
        {/* <Route exact path="/" component={Home} />
        <Route path="/User" component={User} />
        <Route path="/Friends" component={Friends} />
        <Route path="/Create" component={Create} /> */}
      </Router>
      <div className="contents-wrap">
        <div className="newsFeed-wrap">
          <NewsFeed />
        </div>
      </div>

      <div className="widget-wrap">
        <WidgetIndex />
      </div>
    </div>
  );
}
export default App;
