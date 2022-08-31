import React from "react";
function Value(val){
    const [Data,setData]=React.useState([]);
    const [c,setC]=React.useState(val);
    for(var i=1;i<c;i++){
        setC(prev=>prev-1)
        fetch("https://swapi.dev/api/people/"+ i)
        .then(res=>res.json())
        .then(data=>setData(prev=>prev.concat(data)))  
    }
    return(Data);
}
export default (Value)