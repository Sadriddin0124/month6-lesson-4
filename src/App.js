import React, { Component } from "react";
import Header from "./components/Header/header";
import Popular from "./components/popular/popular";
import Offers from "./components/Offers/offers";
import Blog from "./components/Blogs/blogs";
import Footer from "./components/Footer/footer";
export default class App extends Component {
 

  render() {
    return (
     <div>
        <Header/>
        <Popular/>
        <Offers/>
        <Blog/>
        <Footer/>
     </div>
    );
  }
}
