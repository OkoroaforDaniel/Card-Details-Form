import React, { useState } from "react";
import Complete from "./Complete";

function Form(){

const [input, setInput] = useState({
    cardholderName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: ""
})

const [click, setClick] =useState(true)

function handleChange(event){
    const {name, value} = event.target;
    setInput(prevValue=>{
       return{ ...prevValue,
        [name]: value
    }
    })
}

function handleClick(event){
    setClick(false)
    
    event.preventDefault()
}


    return(

<div>

        {click === true ? 
            <form className="Form">
            
            <label for="fname" >CARDHOLDER NAME</label>
            <div>
            <input id="fname" onChange={handleChange} type="text" placeholder="e.g. Jane Appleseed" name="cardholderName" value={input.cardholderName} />
            </div>
            <label for="number" >CARD NUMBER</label>
            <div>
            <input id="number" onChange={handleChange} type="number" placeholder="e.g. 1234 5678 9123 0000" name="cardNumber" value={input.cardNumber} />
            </div>
            <label >EXP. DATE (MM/YY) CVC</label>
            <div>
            <input className="monthInput" id="month" onChange={handleChange} type="number" placeholder="MM" name="cardMonth" min="1" max="5" value={input.cardMonth}/>
            <input className="yearInput" id="number" onChange={handleChange} type="number" placeholder="YY" name="cardYear" width="48" height="11" value={input.cardYear}/>
            
            <input className="cvcInput" id="cvc" onChange={handleChange} type="number" placeholder="e.g. 123" name="cardCvc" value={input.cardCvc}/>
            </div>
            <button onClick={handleClick} >Confirm</button>
   
        </form>
        :
            <Complete />
        }
        
       
        <div className="parent">
         <p className="defaultCardName">{ click === true ? "JANE APPLESEED" : input.cardholderName }</p>
         <p className="defaultCardDate" >{ click === true ? "00/00" :input.cardMonth + "/" + input.cardYear}</p>
        <p className="defaultCardNumber">{ click === true ? "0000 0000 0000 0000" : input.cardNumber }</p>
        <p className="defaultCardCvc">{ click === true ? "000" : input.cardCvc }</p>
        </div>
  
    </div>
    )
}

export default Form;