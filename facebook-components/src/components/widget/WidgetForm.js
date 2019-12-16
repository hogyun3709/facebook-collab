import React from 'react';
import WidgetItem from './WidgetItem'
import './WidgetForm.css';

const WidgetForm = ({ widgetInputBar, friendList, onToggle, close }) => {

    return(
        <div className="widgetFormWrap">
            <div 
            className="widgetHeader"
            onClick={onToggle}>
                채팅
                <ul className="widgetMenuBox">
                    <li className="widgetMenu">새 메세지</li>
                    <li className="widgetMenu">새 그룹 만들기</li>
                    <li className="widgetMenu">옵션</li>
                </ul>
            </div>
            <div className={close?'widgetItemWrap':'widgetItemClose'}>
                <div className="widgetItemBox">
                    <ul className="widgetItem">
                        {friendList}
                    </ul>
                </div>
                <div className="widgetInputBar clear">
                    {widgetInputBar}
                </div>
            </div>
        </div>
    );
}
export default WidgetForm;
