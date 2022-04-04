import React from "react";
import Pin from "../assets/pin.png";

const Entry = (props) => {
    return(
        <div className="travel-items">
            <img src={props.imageUrl} className="travel-img"/>
            <div>
                <div style={{paddingLeft:36}}>
                    <img src={Pin} className="pin"/>
                    {props.location}
                </div>
                <div className="header-text">{props.title}</div>
                <div style={{paddingLeft:36}}>
                    <strong>
                        <small>{`${props.startDate} - ${props.endDate}`}</small>
                    </strong>
                </div>
                <p className="body-text">{props.description}</p>
            </div>
        </div>
    )
}

export default Entry;