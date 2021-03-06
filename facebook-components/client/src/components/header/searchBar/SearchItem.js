import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import './SearchItem.css';

class SearchItem extends React.Component {
    render(){
        const { id, text, onRemove } = this.props;
        return(
            <div className="searchItem-box">
                <Link
                className="searchItem-txt"
                to=""
                >
                    {text}
                </Link>
                <Link 
                className="searchItem-rm"
                onClick={(e) => {onRemove(id)}}
                >
                </Link>
            </div>
        );
    }
}
export default SearchItem;