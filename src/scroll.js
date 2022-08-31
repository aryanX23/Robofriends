import React from "react";
export default function Scroll(props){
    return(
        <div style={{overflow:'scroll',height:'500px',border:'solid black 3px',width:'100%',scrollbarWidth:'none'}}>
            {props.children}
        </div>
    );
}