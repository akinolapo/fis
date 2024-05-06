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
    <div>page</div>
  )
}

export default page