import Image from "next/image";
import Slider from "./Slider/Slider";

const Hero = () => {
  return (
    <div className="text-white py-20">
      <h2 className="text-4xl font-bold mb-4">
        Welcome to the Federation of Igbo Students
      </h2>
      <p className="text-lg mb-8">
        Empowering Tomorrow's Leaders, Preserving Igbo Heritage
      </p>
      <Slider/>
    </div>
  );
};

export default Hero;
