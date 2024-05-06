import React from "react";
import Image from "next/image";
import Slider from "../Slider/Slider";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="text-white py-20">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-8">{subtitle}</p>
      <Slider />
    </div>
  );
};

export default Hero;
