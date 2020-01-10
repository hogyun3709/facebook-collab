import React from 'react';
import SearchList from './SearchList';
import './SearchForm.css';

const SearchForm = ({ value, logs, onChange, onCreate, onKeyPress, onRemove, searchlog, onDropdown }) => {

    return(
        <div className="searchform">
            <input
            className="inputBar"
            type="text"
            placeholder="검색"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onClick={onDropdown}
            />
            <button 
            type="submit"
            className="submit"
            onClick={onCreate}
            />
            <div 
            class={searchlog && logs.length > 0 ? 
                'SearchList-wrap' : 'SearchList-wrap close'}
            >
                <SearchList 
                logs={logs} 
                onRemove={onRemove}
                />
            </div>
        </div>
    );
}
export default SearchForm;