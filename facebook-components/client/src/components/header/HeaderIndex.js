import React from 'react';
import SearchBar from './searchBar/SearchBarIndex';
import Account from './account/Account';
import Notice from './notice/Notice';
import './HeaderIndex.css';

class HeaderIndex extends React.Component {

    render(){
        return(
            <header className="App-header-wrap">
                <div className="App-header">
                    <div className="App-header_left">
                        <SearchBar />
                    </div>
                    <div className="App-header_right">
                        <Account />
                        <Notice />
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderIndex;