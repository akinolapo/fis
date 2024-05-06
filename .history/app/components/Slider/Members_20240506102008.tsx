'use client'
import Carousel from 'react-bootstrap/Carousel';

import './bootstrap.min.css';

const Members = () => {
  return (
    <div className="container mx-auto py-8">
      <Carousel indicators={false} controls={false}>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/path/to/image1.jpg"
            alt="Member 1"
          />
          <Carousel.Caption>
            <h3 className="text-center font-semibold">President</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/path/to/image2.jpg"
            alt="Member 2"
          />
          <Carousel.Caption>
            <h3 className="text-center font-semibold">Vice President</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/path/to/image3.jpg"
            alt="Member 3"
          />
          <Carousel.Caption>
            <h3 className="text-center font-semibold">Secretary</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default Members;
