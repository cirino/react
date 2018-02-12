import React from 'react';
import {slide as Menu} from 'react-burger-menu';

const SideBar = () => {
    return (
        <Menu className="bm-menu">
            <a key="0" id="home" className="bm-item-list"  href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>
            <a key="1" id="about" className="bm-item-list" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>
            <a key="2" id="contact" className="bm-item-list" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>
            <a key="3" className="bm-item-list" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>
            <a key="4" className="bm-item-list" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>
            <a key="5" className="bm-item-list" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>

          <a onClick={ this.showSettings } className="bm-item-list" href="">Settings</a>
        </Menu>
    );
};

export default SideBar;