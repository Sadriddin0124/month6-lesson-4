import React, {Component} from "react";
import "../Navbar/navbar.css"

export default class Navbar extends Component {
    state= {
        navbar__items: [
            {link: "#", title: 'Home'},
            {link: "#", title: 'Location'},
            {link: "#", title: 'Blog'},
            {link: "#", title: 'About'},
            {link: "#", title: 'Contact'}
        ]
    }
    render() {
        const {navbar__items} = this.state
        return (
            <nav className="navbar">
                <h1 className="navbar__title">Traveland</h1>
                <ul className="navbar__list">
                    {
                        navbar__items.map((item, index)=> {
                            return <li><a href={item.link}>{item.title}</a></li>
                        })
                    }
                </ul>
                <button className="btn btn-danger p-2">Booking now</button>
                <div className="burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        )
    }
}