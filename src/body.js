import React from "react";
import './body.css';
import Card from "./card.js";
import Scroll from "./scroll";
import Value from "./starwars";
export default function Body(props){
    const robots=Value(props.R);
    const cards=robots.map(item=>{
        if(item.name.toLowerCase().startsWith(props.text.toLowerCase())){
        return(
            <Card
            key={item.id}
            id={item.id}
            {...item}
            />
        )}
        return(
            null
        );
    })
    return(
        <Scroll>
        <div className="card-list">     
            {cards}  
        </div>
        </Scroll> 
    )
}