import {React} from "react";
import "./style.css";
import { experienceData, travelData } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Entry from "./components/Entry";

const App = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <div className="exp-container">
                { experienceData.map(exp => <Card key={exp.id} {...exp}/>) }
            </div>
            <div className="header-text">
                Travels & Tours
            </div>
            <p className="body-text">Check out the wonderful places that are sure to be a great addition to your bucket list.</p>
            <div className="travel-container">
                { travelData.map(travel => <Entry key={travel.id} {...travel}/>) }
            </div>            
        </>
    )
}

export default App;