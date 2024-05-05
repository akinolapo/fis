import Image from "next/image";


const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start px-4 py-8 md:py-16">
      <div className="md:w-1/3 mr-0 md:mr-8 mb-4 md:mb-0">
        <Image
          src="/about.jpeg"
          alt="About Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
        <p className="leading-relaxed mb-4">
        We, the Igbo students of Obafemi Awolowo University (OAU) in Ile-Ife, Nigeria, united by our shared heritage and values, hereby establish the Federation of Igbo Students (FIS) at OAU. Committed to fostering brotherly love, unity, and peace among Igbo students, FIS is dedicated to promoting and preserving Igbo cultural heritage, language, and values as a hallmark of our ethnic identity.
        </p>
        <button className="bg-zinc-950 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
