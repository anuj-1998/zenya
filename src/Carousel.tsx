import Carousel from 'react-bootstrap/Carousel';
import img1 from '../src/assets/img1.jpg';
import img2 from '../src/assets/img2.jpg';
import img3 from '../src/assets/img3.jpg';
import img4 from '../src/assets/img4.jpg';
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ height: '550px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Fourth slide"
          style={{ height: '550px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
