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
import SideMenuIndex from "./components/sideMenu/SideMenuIndex";
import NewsFeed from "./components/newsFeed/NewsFeedIndex";
import WidgetIndex from "./components/widget/WidgetIndex";
<<<<<<< HEAD:facebook-components/src/App.js
import Footer from "./components/footer/Footer";

=======
import ChatBoard from "./components/chat/ChatBoard";
>>>>>>> 1f62def4201b148c9284d1593e4a5dfccffb3144:facebook-components/client/src/App.js

function App() {
  return (
    <Router className="App">
      <div className="App-container">
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
        </header>
        {/* <Route exact path="/" component={Home} />
        <Route path="/User" component={User} />
        <Route path="/Friends" component={Friends} />
        <Route path="/Create" component={Create} /> */}
<<<<<<< HEAD:facebook-components/src/App.js
        <div className="widget-wrap">
          <WidgetIndex />
=======
      </Router>
      <div className="contents-wrap">
        <div className="newsFeed-wrap">
          <NewsFeed/>
        </div>
        <div>
          <ChatBoard/>
>>>>>>> 1f62def4201b148c9284d1593e4a5dfccffb3144:facebook-components/client/src/App.js
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
     </div>
    </Router>
  );
}
export default App;
