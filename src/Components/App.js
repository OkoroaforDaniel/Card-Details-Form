import React from "react";
import Form from "./Form";
import image1 from "../assets/images/bg-main-desktop.png";
import image2 from "../assets/images/bg-card-front.png";
import image3 from "../assets/images/bg-card-back.png";
import image4 from "../assets/images/bg-main-mobile.png";

function App() {
  return (
    <div className="App">
      <div className="parent">
        <img className="desktopMain" src={image1} alt="img1" />
        <img className="cardFront" src={image2} alt="img2" />
        <img className="cardBack" src={image3} alt="img3" />
        <img
          className="mainMobile"
          src={image4}
          alt="img4"
        />
      </div>

      <Form />
    </div>
  );
}

export default App;
