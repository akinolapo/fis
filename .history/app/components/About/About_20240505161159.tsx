

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start px-4 py-8 md:py-16">
      <div className="md:w-1/3 mr-0 md:mr-8 mb-4 md:mb-0">
        <img
          src="/about."
          alt="About Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
