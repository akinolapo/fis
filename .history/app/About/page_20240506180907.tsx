import React from 'react'
import Hero from '../components/Hero/Hero'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Hero
      title="About Us"
      subtitle="Empowering Unity, Celebrating Heritage, and Nurturing Academic Excellence"
      />
       <div className="flex flex-col md:flex-row items-center justify-center md:justify-start px-4 py-8 md:py-16">
      <div className="md:w-1/3 mr-0 md:mr-8 mb-4 md:mb-0">
        <Image
          src="/images/about.jpeg"
          alt="About Image"
          className="w-full h-auto shadow-lg rounded-2xl"
          width={339}
          height={339}
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
        <p className="leading-relaxed mb-4">
        We, the Igbo students of Obafemi Awolowo University (OAU) in Ile-Ife, Nigeria, united by our shared heritage and values, hereby establish the Federation of Igbo Students (FIS) at OAU. Committed to fostering brotherly love, unity, and peace among Igbo students, FIS is dedicated to promoting and preserving Igbo cultural heritage, language, and values as a hallmark of our ethnic identity.
        </p>
        <h5 className="mb-4">Our objectives include:</h5>
        <ul>
          <li>Hostel Accommodation: Successfully providing hostel accommodation to our members.</li>
          <li>Scholarship Opportunities: Offering scholarships to support academic excellence among our members.</li>
          <li>Unity and Love: Promoting unity and fostering a sense of community among all Igbo students.</li>
          <li>Rights Advocacy: Advocating for and defending the rights of Igbo students on campus.</li>
          <li>Cultural Representation: Representing and celebrating Igbo cultural values within the university community.</li>
        </ul>
        <p className="leading-relaxed mb-4">
        In our pursuit of these goals, we are determined to encourage scholarship and academic excellence as viable alternatives to anti-social acts and other moral vices, empowering our members to thrive both academically and culturally.
        </p>
        <button className="bg-zinc-950 hover:bg-black text-white font-bold py-4 px-10 rounded-full focus:outline-none focus:shadow-outline">
          Read Less
        </button>
      </div>
    </div>
    </div>
  )
}

export default page