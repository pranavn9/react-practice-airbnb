import React from "react";
import Star from "../assets/star.png";

const Card = (props) =>  {
    let statusText;
    if (props.openSpots === 0) {
        statusText = "SOLD OUT"
    } else if (props.location === "Online") {
        statusText = "ONLINE"
    }    
    return (
        <div className="card" key={props.id}>
            {statusText && <div className="card-status">{statusText}</div>}
            <img src={props.imageUrl} className="card-img"/>
            <div className="card-stats">
                <img src={Star} className="card-star"/>   
                <span>{props.stats.rating}</span>
                <span className="gray"> {`(${props.stats.reviewCount})`} • </span>
                <span className="gray">{props.location}</span>                     
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>            
        </div>
    )
}

export default Card;