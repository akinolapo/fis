'use client'

import React, { useState } from "react";
import Image from "next/image";

// Sample data for gallery images with captions
const galleryImages = [
  { src: "/images/gallery1.jpeg", caption: "ERIN-IJESA WATERFALL" },
  { src: "/images/gallery2.jpeg", caption: "FRESHER’S POOL PARTY" },
  { src: "/images/gallery3.jpeg", caption: "CHRISTMAS CELEBRATION" },
  { src: "/images/gallery4.jpeg", caption: "MEMBER" },
  { src: "/images/gallery5.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery7.jpeg", caption: "MEMBER" },
  { src: "/images/gallery8.jpeg", caption: "MEMBER" },
  { src: "/images/gallery9.jpeg", caption: "MEMBER" },
  { src: "/images/gallery10.jpeg", caption: "MEMBER" },
  { src: "/images/gallery11.jpeg", caption: "MEMBER" },
  { src: "/images/gallery12.jpeg", caption: "MEMBER" },
  { src: "/images/gallery13.jpeg", caption: "MEMBER" },
  { src: "/images/gallery14.jpeg", caption: "MEMBER" },
  { src: "/images/gallery15.jpeg", caption: "MEMBER" },
  { src: "/images/gallery16.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  { src: "/images/gallery6.jpeg", caption: "MEMBER" },
  // Add more images with captions here
];


const page = () => {
    const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle image click
  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Function to handle next image click
  const handleNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(galleryImages[currentIndex + 1].src);
    }
  };

  // Function to handle previous image click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(galleryImages[currentIndex - 1].src);
    }
  };

  // Function to close the full-size image view
  const handleClose = () => {
    setSelectedImage("");
  };

  return (
    <div className="py-5">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">GALLERY</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image.src, index)}>
            <div className="relative">
              <Image
                src={image.src}
                alt={`Image ${index}`}
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-2 rounded-b-2xl">
                <p className="text-sm text-center">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Full-size image modal */}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-10"
            onClick={handleClose}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-lg p-2 rounded-full"
                onClick={handleClose}
              >
                Close
              </button>
              <Image
                src={selectedImage}
                alt={`Image ${currentIndex}`}
                width={600}
                height={600}
              />
              {currentIndex > 0 && (
                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-xl"
                  onClick={handlePrev}
                >
                  &lt;
                </button>
              )}
              {currentIndex < galleryImages.length - 1 && (
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-xl"
                  onClick={handleNext}
                >
                  &gt;
                </button>
              )}
              <div className="absolute bottom-4 left-0 right-0 text-white text-center">
                <p className="text-lg">{galleryImages[currentIndex].caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default page