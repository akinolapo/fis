import Image from 'next/image';
import React from 'react';

interface ImageWithTitleProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const ImageWithTitle: React.FC<ImageWithTitleProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="mb-6 md:w-1/2 lg:w-1/3">
      <Image src={imageSrc} alt={title} className="w-full h-auto mb-4 rounded-2xl" width={320} height={320} />
      <h5>{title}</ht>
      <p className="">{subtitle}</p>
    </div>
  );
};

export default ImageWithTitle;
