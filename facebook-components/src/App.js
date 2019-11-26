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
import SearchBar from "./components/Header/SearchBar/SearchBar";
import Account from "./components/Header/Account/Account";
import Home from "./components/Header/Menu/Home";
import User from "./components/Header/Menu/User";
import Friends from "./components/Header/Menu/Friends";
import Create from "./components/Header/Menu/Create";
import Notice from "./components/Header/Notice/Notice";
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
      <NewsFeed />
    </React.Fragment>
  );
}
export default App;
