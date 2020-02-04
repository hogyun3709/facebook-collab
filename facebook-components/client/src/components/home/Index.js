import React from 'react';
import Header from '../header/HeaderIndex';
import SideMenuIndex from "../sideMenu/SideMenuIndex";
import NewsFeed from "../newsFeed/NewsFeedIndex";
import WidgetIndex from "../widget/WidgetIndex";
import Footer from "../footer/Footer";
import ChatBoard from "../chat/ChatBoard";
import './Index.css';

class Index extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Header />
                <div className="contents-wrap">
                    <nav className="gnb-wrap">
                        <SideMenuIndex />
                    </nav>
                    <main className="newsFeed-wrap">
                        <NewsFeed />
                    </main>
                    <div className="widget-wrap">
                        <WidgetIndex />
                    </div>
                    <footer className="footer-wrap">
                        <Footer />
                    </footer>
                </div>
                <div className="chat-wrap">
                    <ChatBoard/>
                </div>
            </React.Fragment>
        );
    }
}
export default Index;