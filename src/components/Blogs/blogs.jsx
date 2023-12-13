import React, {Component} from "react";
import blog1 from '../../Assets/blogs1.png'
import blog2 from '../../Assets/blogs2.png'
import blog3 from '../../Assets/blogs3.png'
import blog4 from '../../Assets/blogs4.png'
import './blogs.css'

export default class Blog extends Component {
    render() {
        return (
            <section className="blogs">
                <h1 className="blogs__title">From Blog & News</h1>
                <p className="blogs__subtitle">Welcome to Community Conversations, a new interview series featuring Intrepid travellers, creatives and activists in our community.</p>
                <div className="blogs__cards">
                    <div className="blogs__card1">
                        <div className="blogs__card1-img">
                            <img src={blog1} alt="blog" />
                        </div>
                        <h4 className="blogs__card1-title">Banff National Park</h4>
                        <p className="blogs__card1-desc">Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada's most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible </p>
                        <h5 className="blogs__card1-link">@thomasalva_adison</h5>
                    </div>
                    <div className="blogs__card2">
                        <div className="blogs__card2-img">
                            <img src={blog2} alt="blog" />
                        </div>
                        <div className="blogs__card-text">
                            <h4>The Hiroshima Peace!</h4>
                            <p>It was formally opened to the public in August that year.</p>
                            <h6>@shova_bd88</h6>
                        </div>
                    </div>
                    <div className="blogs__card2">
                        <div className="blogs__card2-img">
                            <img src={blog3} alt="blog" />
                        </div>
                        <div className="blogs__card-text">
                            <h4>The Hiroshima Peace!</h4>
                            <p>It was formally opened to the public in August that year.</p>
                            <h6>@shova_bd88</h6>
                        </div>
                    </div>
                    <div className="blogs__card2">
                        <div className="blogs__card2-img">
                            <img src={blog4} alt="blog" />
                        </div>
                        <div className="blogs__card-text">
                            <h4>The Hiroshima Peace!</h4>
                            <p>It was formally opened to the public in August that year.</p>
                            <h6>@shova_bd88</h6>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}