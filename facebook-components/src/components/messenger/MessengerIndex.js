import React, { Component } from "react";
import MessageBoard from "./MessageBoard"

class MessengerIndex extends Component {
  render(){
    return(
      <MessageBoard/>
      /*
        1. MessageForm 컴포넌트에서 user test Input(message) 을 받아온다 submit
        2. 받아온 user의 (message)를 Message 컴포넌트에서 보여준다
        3. MessageBoard 는 Message(obj로 list화시킴)와 messageForm 을 render 한다.
      */
    )
  }
}

export default MessengerIndex
