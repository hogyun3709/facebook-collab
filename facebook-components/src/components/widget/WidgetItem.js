import React from 'react';
import './WidgetItem.css';

const WidgetItem = ({ name }) => {
    return(
        <li className="widgetItemlist">
            
            {name}
            
        </li>
    );
}
export default WidgetItem;
