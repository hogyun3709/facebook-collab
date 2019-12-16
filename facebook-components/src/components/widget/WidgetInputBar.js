import React from 'react';
import './WidgetInputBar.css';

const WidgetInputBar = ({ value, onChange, onRemove }) => {
    return(
        <React.Fragment>
            <label
            className="widgetInputLabel"
            for="widgetInput" />
            <input
            className="widgetInput"
            id="widgetInput"
            type="text"
            placeholder="검색"
            value={value}
            onChange={onChange}
            />
            <div
            className="widgetInputRemove"
            onClick={onRemove}
            />
        </React.Fragment>
    );
}
export default WidgetInputBar;
