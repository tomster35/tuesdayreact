import React           from 'react';
import {Carousel} from 'react-bootstrap';

class Slider extends React.Component{
 render(){
      return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.ctfassets.net/od02wyo8cgm5/49u9fM3Wn6HyeIX6DLL5qy/e34d195152cd859a90477d7e32de45fb/cloud_2-fw19-all_black-m-g4.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.ctfassets.net/od02wyo8cgm5/5kpFyd0r2uP97j7TIwahLc/49be548876c61e93ac58efab04906d5f/cloud_waterproof_2-fw19-black_lunar-w-g1.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.ctfassets.net/od02wyo8cgm5/49u9fM3Wn6HyeIX6DLL5qy/e34d195152cd859a90477d7e32de45fb/cloud_2-fw19-all_black-m-g4.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 );
}
}

export default Slider;