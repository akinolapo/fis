'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './members.css'
import Image from 'next/image';

// Sample data for members
const membersData = [
  { id: 1, name: 'OGBUEHI CHIDERA DILLION', position: 'PRESIDENT', image: '/images/PRESIDENT.jpg' },
  { id: 2, name: 'Jane Smith', position: 'CTO', image: '/jane.jpg' },
  { id: 3, name: 'Alice Johnson', position: 'Designer', image: '/alice.jpg' },
  // Add more members here
];

const Members = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 members at a time on desktop
    slidesToScroll: 1,
    arrows: false, // Hide arrow navigation
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2, // Show 2 members at a time on tablet
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 member at a time on mobile
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {membersData.map((member) => (
          <div key={member.id}>
            <Image src={member.image} alt={member.name} width={339} height={339} className='' />
            <h5>{member.name}</h5>
            <p>{member.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Members;
