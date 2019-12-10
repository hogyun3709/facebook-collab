import React from 'react';
import WidgetItem from './WidgetItem'
import './WidgetForm.css';

const WidgetForm = ({ widgetInputBar, friendList }) => {

    return(
        <div className="widgetFormWrap">
            <div className="widgetHeader">
                채팅
                <div>
                    {/* 부가기능 입력 */}
                </div>
            </div>
            <div className="widgetItemWrap">
                <ul className="widgetItem">
                    {friendList}
                </ul>
                <div className="widgetInputBar clear">
                    {widgetInputBar}
                </div>
            </div>
        </div>
    );
}
export default WidgetForm;
