import React from "react";
import EstiloSlider from "./style";

function Slider(props){

  return(
    <EstiloSlider>
    <React.Fragment>
      <div id="carouselExample" className="carousel slide h-100">
        <div className="carousel-inner h-100">
          {props.children}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
    </EstiloSlider>
  )
}

export default Slider;