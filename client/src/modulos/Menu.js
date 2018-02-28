import React from 'react';
import {slide as Menu} from 'react-burger-menu';

const SideBar = () => {
    return (
        <Menu className="bm-menu">
            <a key="0" id="home" className="bm-item-list" href=""><i className="fa fa-fw fa-star-o" /><span>Início</span></a>
            <a key="1" id="about" className="bm-item-list" href=""><i className="fa fa-fw fa-bell-o" /><span>Alertas</span></a>

            <a onClick={ this.showSettings } className="bm-item-list" href="">Configurações</a>
        </Menu>
    );
};

export default SideBar;