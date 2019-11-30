import React from 'react';
import SearchList from './SearchList';
import './SearchForm.css';

const SearchForm = ({ value, logs, onChange, onCreate, onKeyPress }) => {
    return(
        <React.Fragment>
            <input
            className="inputBar"
            type="text"
            placeholder="검색"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            <button 
            type="submit"
            className="submit"
            onClick={onCreate}
            />
            <div class="SearchList-wrap">
                <SearchList logs={logs} />
            </div>
        </React.Fragment>
    );
}
export default SearchForm;