import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signIn/SignIn";
import SearchBar from "./components/header/searchBar/SearchBarIndex";
import Account from "./components/header/account/Account";
// import Home from "./components/header/menu/Home";
// import User from "./components/header/menu/User";
// import Friends from "./components/header/menu/Friends";
// import Create from "./components/header/menu/Create";
import Notice from "./components/header/notice/Notice";
import SideMenuIndex from "./components/sideMenu/SideMenuIndex";
import NewsFeed from "./components/newsFeed/NewsFeedIndex";
import WidgetIndex from "./components/widget/WidgetIndex";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <Router className="App">
      {/* <Route path="/signin" component={SignIn}/> */}
      <div className="signin-wrap">
        <Route path="/" component={SignIn}/>
      </div>
      {/* <div className="App-container">
        <header className="App-header-wrap">
          <div className="App-header">
            <div className="App-header-left">
              <Route path="/" component={SearchBar} />
            </div>
            <div className="App-header-right">
              <Route path="/" component={Account} />
              <Route path="/" component={Notice} />
            </div>
          </div>
        </header> */}
        {/* <Route exact path="/" component={Home} />
        <Route path="/User" component={User} />
        <Route path="/Friends" component={Friends} />
        <Route path="/Create" component={Create} /> */}
        {/* <div className="widget-wrap">
          <WidgetIndex />
        </div>
        <div className="contents-wrap">
          <nav className="gnb-wrap">
            <SideMenuIndex />
          </nav>
          <main className="newsFeed-wrap">
            <NewsFeed />
          </main>
          <footer className="footer-wrap">
            <Footer />
          </footer>
        </div>
     </div> */}
    </Router>
  );
}
export default App;
