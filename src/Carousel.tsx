import Carousel from 'react-bootstrap/Carousel';
import img1 from '../src/assets/img1.jpeg';
import img2 from '../src/assets/img2.jpeg';
//comment
function UncontrolledExample(): JSX.Element {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ height: '550px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ height: '550px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
