import Image from 'next/image';
import React from 'react';

interface ImageWithTitleProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const ImageWithTitle: React.FC<ImageWithTitleProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="mb-6">
      <Image src={imageSrc} alt={title} className="w-full h-auto mb-4 rounded-2xl" width={320} height={320} />
      <p className="text-lg mb-2">{title}</p>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default ImageWithTitle;
