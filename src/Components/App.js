import React from "react";
import Form from "./Form"

function App() {
  return (
    <div className="App">
    <div className="parent">
    <img className="desktopMain" src="images/bg-main-desktop.png" alt="img1" />
    <img className="cardFront" src="images/bg-card-front.png" alt="img2" />
    <img className="cardBack" src="images/bg-card-back.png" alt="img3" />
    <img className="mainMobile" src="images/bg-main-mobile.png" alt="img4" />

    {/* <p className="defaultCardName">JANE APPLESEED</p>
    <p className="defaultCardDate" >00/00</p>
    <p className="defaultCardNumber">0000 0000 0000 0000</p>
    <p className="defaultardCvc">000</p> */}

    </div>

    <Form />
    </div>
  );
}

export default App;
