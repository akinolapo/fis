

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start px-4 py-8 md:py-16">
      <div className="md:w-1/3 mr-0 md:mr-8 mb-4 md:mb-0">
        <img
          src="/about.jpeg"
          alt="About Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
        <p className="leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="bg-zinc-950 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
