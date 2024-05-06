'use client'
import React from 'react';
import Slider from 'react-slick';

const Excos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides per slide on larger screens
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides per slide on tablets
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide per slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Executive Committee</h2>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <img src="/path/to/image1.jpg" alt="Member 1" className="mx-auto" />
          <p className="text-center font-semibold">President</p>
        </div>
        {/* Slide 2 */}
        <div>
          <img src="/path/to/image2.jpg" alt="Member 2" className="mx-auto" />
          <p className="text-center font-semibold">Vice President</p>
        </div>
        {/* Slide 3 */}
        <div>
          <img src="/path/to/image3.jpg" alt="Member 3" className="mx-auto" />
          <p className="text-center font-semibold">Secretary</p>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Excos;
