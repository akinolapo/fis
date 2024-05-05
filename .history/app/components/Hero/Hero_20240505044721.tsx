
const Hero = () => {
  return (
    <div className="text-white py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Welcome to the Federation of Igbo Students
      </h1>
      <p className="text-lg mb-8">
        Empowering Tomorrow's Leaders, Preserving Igbo Heritage
      </p>
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        className="rounded-lg mx-auto"
      />
    </div>
  );
};

export default Hero;
