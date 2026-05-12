import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import HeroSection from "../../containers/home/HeroSection";
import CapabilityCards from "../../containers/home/CapabilityCards";
import CoreStack from "../../containers/home/CoreStack";
import BackgroundCard from "../../containers/home/BackgroundCard";
import "./HomePage.css";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header theme={this.props.theme} />
        <main>
          <HeroSection theme={this.props.theme} />
          <CapabilityCards theme={this.props.theme} />
          <CoreStack theme={this.props.theme} />
          <BackgroundCard theme={this.props.theme} />
        </main>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
