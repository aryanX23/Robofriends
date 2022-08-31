import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./body.js"
import "./index.css";
import Header from "./header.js";
import 'tachyons';
function App(){
    const[txt,setTxt]=React.useState("");
    const[R,setR]=React.useState(0);
    function handleC(event){
        setTxt(event.target.value);
    }
    function handleR(event){
        setR(event.target.value);
    }
    return(
        <div className="mainBody">
            <Header/>
            <div className="pa2" style={{position:'relative',display: 'flex',alignItems:'center',justifyContent:'center'}}>
                <input type="search" placeholder="Search Robots"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={handleC}
                 />
                <input type="number" name="number" onChange={handleR} value={R} style={{width:'40px'}}/>
            </div>
            <Body key={txt} R={R} text={txt} />
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);