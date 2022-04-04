import React from "react";
import AirHero from "../assets/airbnb-hero.png";
const Hero = () => {
    return(
        <>
            <div className="hero-container">
                <img className="hero-img" src={AirHero} alt="Airbnb misc image"/>
            </div>
            <div className="header-text">
                Experiences
            </div>
            <p className="body-text">Join unique interactive activities led by one of a kind hosts - from the comfort of your homes or on the trail.</p>
        </>
    )
}

export default Hero;