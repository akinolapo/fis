import React from 'react';

interface ImageWithTitleProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const ImageWithTitle: React.FC<ImageWithTitleProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center mb-8 md:w-1/3 sm:w-1/2">
      <img src={imageSrc} alt={title} className="w-full mb-4" />
      <p className="text-lg font-bold mb-2">{title}</p>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default ImageWithTitle;
