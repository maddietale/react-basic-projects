import React, { Component } from 'react';
import style from "../style/Header.module.css";
import logo from "../img/logo.png";
import like from "../icon/heart.png";
import notif from "../icon/notification.png";
import profile from "../icon/user.png";

class Header extends Component {
    render() {
        return (
            <>
                <div className={style.container}>
                    <img className={style.logo} alt='pinterest logo' src={logo} />
                    <button style={{ backgroundColor: "black", color: "white" }} className={style.menu} >Home</button>
                    <button className={style.menu} >Today</button>
                    <button className={style.menu} >Create</button>
                    <input className={style.search} type="search" placeholder='search' />
                    <img className={style.icon} alt='like icon' src={like} />
                    <img className={style.icon} alt='like icon' src={notif} />
                    <img className={style.icon} alt='like icon' src={profile} />
                </div>
            </>
        );
    }
}

export default Header;