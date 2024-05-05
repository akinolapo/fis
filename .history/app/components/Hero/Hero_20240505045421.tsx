import Image from "next/image";

const Hero = () => {
  return (
    <div className="text-white py-20">
      <h2 className="text-4xl font-bold mb-4">
        Welcome to the Federation of Igbo Students
      </h2>
      <p className="text-lg mb-8">
        Empowering Tomorrow's Leaders, Preserving Igbo Heritage
      </p>
      <Image
        src="/"
        alt="Hero Image"
        className="rounded-lg mx-auto"
        height={500}
        width={1080}
      />
    </div>
  );
};

export default Hero;
