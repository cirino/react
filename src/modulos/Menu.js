import React from 'react';
import {slide as Menu} from 'react-burger-menu';

const SideBar = () => {
    return (
        <Menu className="bm-menu">
          <a id="home" className="bm-item-list" href="#">Home</a>
          <a id="about" className="bm-item-list" href="#">About</a>
          <a id="contact" className="bm-item-list" href="#">Contact</a>
          <a onClick={ this.showSettings } className="bm-item-list" href="#">Settings</a>
        </Menu>
    );
};

export default SideBar;