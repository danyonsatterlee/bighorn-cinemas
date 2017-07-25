import react from "React";
import {Carousel, CarouselItem, CarouselCaption} from "react-bootstrap";

class CarouselComp extends React.Component{
    render(){
        return(
                <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={this.props.sliders}/>
      <Carousel.Caption>
        <h3>{this.props.headline}</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
        )
    }
}