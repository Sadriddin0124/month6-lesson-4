import React, { Component } from "react";
import Navbar from "../Navbar/navbar";
import "./header.css"
export default class Header extends Component{
    render () {
        return(
            <header className="header">
                <Navbar/>
                <div className="header__text">
                    <h1 className="header__text-title">Railtrips To Here, There And Everywhere!</h1>
                    <p className="header__text-subtitle">We all wish to start our year the best way possible and also according to a common belief if you have a great start to your.</p>
                    <button className="btn">Explore more</button>
                </div>
            </header>
        )
    }
}