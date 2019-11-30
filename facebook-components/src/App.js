// import React from "react";
// import NewsFeed from "./components/newsFeed/NewsFeedIndex";
// import "./App.css";
//
// function App() {
//   return (
//     <div>
//       <div className="ui two column centered grid">
//         <div className="column">
//           <NewsFeed />
//         </div>
//       </div>
//     </div>
//   );
// }
//
// export default App;

import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/header/searchBar/SearchBarIndex";
import Account from "./components/header/account/Account";
import Home from "./components/header/menu/Home";
import User from "./components/header/menu/User";
import Friends from "./components/header/menu/Friends";
import Create from "./components/header/menu/Create";
import Notice from "./components/header/notice/Notice";
import NewsFeed from "./components/newsFeed/NewsFeedIndex";


function App() {
  return (
    <React.Fragment>
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
      <div class="newsFeed-wrap">
        <NewsFeed />
      </div>
    </React.Fragment>
  );
}
export default App;
