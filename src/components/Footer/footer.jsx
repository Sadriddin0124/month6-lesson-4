import React, {Component} from "react";
import './footer.css'
import footer__link from '../../Assets/footer__links.png'

export default class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer__items">
                    <div className="footer__item">
                        <h1 className="footer__title">Traveland</h1>
                        <p>Contact Us</p>
                        <p>@shovasatkhira88.com</p>
                        <img src={footer__link} alt="footer__links" />
                    </div>
                    <div className="footer__item">
                        <h5>Services</h5>
                        <h5>About</h5>
                        <h5>Our Story</h5>
                        <h5>Benefits</h5>
                        <h5>Branding</h5>
                    </div>
                    <div className="footer__item">
                        <h5>Legal</h5>
                        <h5>Terms & Conditions</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Terms of use</h5>
                    </div>
                    <div className="footer__item">
                        <h2>SUBSCRIBE NOW</h2>
                        <div className="footer__input">
                            <input type="text" />
                            <button className="btn"> Send</button>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}