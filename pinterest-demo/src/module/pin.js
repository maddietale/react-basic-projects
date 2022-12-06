import React, { Component } from 'react';
import style from "../style/Pin.module.css";

class Pin extends Component {
    render() {
        return (
            <>
                <div className={style.box}>
                    <img src={this.props.Address} alt='content'></img>
                    <p>{this.props.Description}</p>
                    <span>{this.props.User}</span>
                </div>
            </>
        );
    }
}

export default Pin;