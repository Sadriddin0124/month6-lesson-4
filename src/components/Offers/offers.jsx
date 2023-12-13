import React, {Component} from "react";
import './offers.css'
import offers1 from '../../Assets/offers1.png'
import offers2 from '../../Assets/offers2.png'
import offers3 from '../../Assets/offers3.png'
import offers4 from '../../Assets/offers4.png'
import offers5 from '../../Assets/offers5.png'

export default class Offers extends Component {
    render() {
        return (
            <section className="offers">
                <h1 className="offers__title">Special Offers</h1>
                <p className="offers__subtitle">With the New Year comes a refreshing sense of wanderlust, a longing in our souls to escape to warmer climates, </p>
                <div className="offers__cards">
                    <div className="offers__card offers__card1">
                        <div className="offers__card-img">
                            <img src={offers1} alt="" />
                        </div>
                        <h3 className="offers__card-title">Statue of Liberty.</h3>
                        <p><span className="location">&#xf3c5;</span>New York <span className="star">&#9733;</span>4.8</p>
                        <h6>4 day 5 Nights</h6>
                        <h5>450$/person</h5>
                    </div>
                    <div className="offers__card">
                        <div className="offers__card-img">
                            <img src={offers2} alt="" />
                        </div>
                        <h3 className="offers__card-title">The Great Wall</h3>
                        <p><span className="location">&#xf3c5;</span>China <span className="star">&#9733;</span>4.9</p>
                        <h6>7 day 8 Nights</h6>
                        <h5>850$/person</h5>
                    </div>
                    <div className="offers__card">
                        <div className="offers__card-img">
                            <img src={offers3} alt="" />
                        </div>
                        <h3 className="offers__card-title">Dizin</h3>
                        <p><span className="location">&#xf3c5;</span>Iran <span className="star">&#9733;</span>4.6</p>
                        <h6>5 day 6 Nights</h6>
                        <h5>550$/person</h5>
                    </div>
                    <div className="offers__card">
                        <div className="offers__card-img">
                            <img src={offers4} alt="" />
                        </div>
                        <h3 className="offers__card-title">Sajek Valley</h3>
                        <p><span className="location">&#xf3c5;</span>Bangladesh <span className="star">&#9733;</span>4.7</p>
                        <h6>3 day 4 Nights</h6>
                        <h5>400$/person</h5>
                    </div>
                    <div className="offers__card">
                        <div className="offers__card-img">
                            <img src={offers5} alt="" />
                        </div>
                        <h3 className="offers__card-title">Osaka Castle</h3>
                        <p><span className="location">&#xf3c5;</span>Japan<span className="star">&#9733;</span>4.7</p>
                        <h6>4 day 5 Nights</h6>
                        <h5>700$/person</h5>
                    </div>
                    
                </div>
            </section>
        )
    }
}