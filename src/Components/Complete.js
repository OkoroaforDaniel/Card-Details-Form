import React from "react";
import icon from "./Icons/icon-complete.svg"

function Complete(){
    return(
        <div className="complete">
            <img src={icon} />
            <h2>THANK YOU!</h2>
            <p>We've added your card details</p>
            <button>Continue</button>
        </div>
    )
}

export default Complete;