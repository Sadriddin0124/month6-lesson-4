import React, {Component} from "react";
import "./popular.css"
import popular1 from "../../Assets/popular1.png"
import popular2 from "../../Assets/popular2.png"
import popular3 from "../../Assets/popular3.png"
export default class Popular extends Component {
    render() {
        return (
            <section className="popular">
                <h1 className="popular__title">Popular Location</h1>
                <p className="popular__subtitle">For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and voyagers— from island hopping in the</p>
                <div className="popular__cards">
                    <div className="popular__card">
                        <div className="popular__card-img">
                            <img src={popular1} alt="popular" />
                        </div>
                        <h2 className="popular__card-title">Istanbul, Turkey</h2>
                        <p className="popular__card-subtitle">Istanbul is a major city in Turkey that straddles Europe. </p>
                    </div>
                    <div className="popular__card">
                        <div className="popular__card-img">
                            <img src={popular2} alt="popular" />
                        </div>
                        <h2 className="popular__card-title">Kuala Lumpur, malaysia</h2>
                        <p className="popular__card-subtitle">A 272-step long trek leads you to this century. </p>
                    </div>
                    <div className="popular__card">
                        <div className="popular__card-img">
                            <img src={popular3} alt="popular" />
                        </div>
                        <h2 className="popular__card-title">Seoul, South Korea</h2>
                        <p className="popular__card-subtitle">South Korea officially the Republic of Korea is a country in East Asia.</p>
                    </div>
                </div>
            </section>
        )
    }
}