'use client'
import Carousel from 'react-bootstrap/Carousel';

const Members = () => {
  // Define an array of members with their details
  const members = [
    { name: 'President', image: '/path/to/image1.jpg' },
    { name: 'Vice President', image: '/path/to/image2.jpg' },
    { name: 'Secretary', image: '/path/to/image3.jpg' },
    // Add more members as needed
    { name: 'Member 4', image: '/path/to/image4.jpg' },
    { name: 'Member 5', image: '/path/to/image5.jpg' },
    { name: 'Member 6', image: '/path/to/image6.jpg' },
    // Add more members as needed
    // Repeat this structure to accommodate all members
  ];

  // Split the members array into chunks of three to represent each slide
  const slides = [];
  for (let i = 0; i < members.length; i += 3) {
    slides.push(members.slice(i, i + 3));
  }

  return (
    <div className="container mx-auto py-8">
      <Carousel
        indicators={false}
        controls={false}
        interval={null} // Disable automatic sliding
        wrap={false} // Disable wrapping around
        slide={true} // Enable sliding one item per slide
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {slide.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  className="d-block mx-auto mb-2"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="font-semibold">{member.name}</h3>
              </div>
            ))}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Members;
