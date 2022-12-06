import React, { Component } from 'react';
import style from "../style/Main.module.css";
import Pin from "../module/Pin";
// image address
import img01 from "../img/01.png";
import img02 from "../img/02.jpeg";
import img03 from "../img/03.jpeg";
import img04 from "../img/04.jpeg";
import img05 from "../img/05.jpeg";
import img06 from "../img/06.jpeg";
import img07 from "../img/07.jpeg";
import img08 from "../img/08.jpeg";
import img09 from "../img/09.jpeg";
import img10 from "../img/010.jpeg";

class Main extends Component {
    render() {
        return (
            <>
                <div className={style.container}>
                    <Pin Address={img01} Description="colorful hair" User="torabiika" />
                    <Pin Address={img06} Description="Snow" User="Yoko" />
                    <Pin Address={img07} Description="Comfort Zone" User="Xavier" />
                    <Pin Address={img10} Description="Coffee" User="Tyler" />
                    <Pin Address={img05} Description="Mine!" User="Rachel" />
                    <Pin Address={img04} Description="Dark Side Of The Moon" User="Wednesday" />
                    <Pin Address={img02} Description="enjoy the now" User="Sara" />
                    <Pin Address={img09} Description="Christmas" User="Kimia" />
                    <Pin Address={img03} Description="Cat" User="Nima" />
                    <Pin Address={img08} Description="That's me!" User="Enid" />
                </div>
            </>
        );
    }
}

export default Main;