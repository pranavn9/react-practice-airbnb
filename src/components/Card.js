import React from "react";
import Star from "../assets/star.png";

const Card = (props) =>  {
    return (
        <div className="card" key={props.id}>
            <img src={props.imageUrl} className="card-img"/>
            <div className="card-stats">
            <div><img src={Star} className="card-star"/>   
                {props.stats.rating}</div><br/>
                <div>{props.stats.reviewCount} • </div>
                <div>{props.location}</div>                     
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>            
        </div>
    )
}

export default Card;