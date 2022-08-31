import React from "react";
import './card.css';
export default function Card(props){
    return(
        <div className="cardBody">
            <img src={`https://robohash.org/${props.name}`} alt="{props.id}" className="card-img"/>
            <h2>{props.name}</h2>
            <p>{props.gender}</p>
            <p>{props.created}</p>
        </div>
    )
}