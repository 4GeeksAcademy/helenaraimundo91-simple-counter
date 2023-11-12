//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter (props){
    return (
        <div className="bigCounter">
            <div className="clock">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="hoursTwo">{props.digitSix}</div>
            <div className="hoursOne">{props.digitFive}</div>
            <div className="minutesTwo">{props.digitFour}</div>
            <div className="minutesOne">{props.digitThree}</div>
            <div className="secondsTwo">{props.digitTwo}</div>
            <div className="secondsOne">{props.digitOne}</div>
        </div>
    )
}

SimpleCounter.propsTypes = {
    digitSix: propsTypes.number,
    digitFive: propsTypes.number,
    digitFour: propsTypes.number,
    digitThree: propsTypes.number,
    digitTwo: propsTypes.number,
    digitOne: propsTypes.number,
};

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/10);
    const fixe = Math.floor(counter/10);
    const four = Math.floor(counter/10);
    const three = Math.floor(counter/10);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/10);
    console.log(six, five, four, three, two, one);
    counter++;

ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app"));
    
}



)




