import React from "react";
import CarouselComp from "./nowplayingComp.js";



class CarouselMap extends React.Component{

 genCar() {
    return this.props.sliders.map((item, index) => {
      return <CarouselComp key={item.headline + index} sliders={this.props.sliders}/>
      
    })
  }    render(){
        return(
<div> {this.genCar()}

</div>
        );
    }
}

export default CarouselMap;