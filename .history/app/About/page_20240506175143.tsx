// pages/about.tsx

import React from 'react';


const AboutPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About page of your website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About Us</h1>
        <p>Welcome to our website!</p>
        <p>
          We are a passionate team dedicated to providing high-quality content
          and services.
        </p>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>

      <style jsx>{`
        main {
          padding: 2rem;
          text-align: center;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        footer {
          background-color: #333;
          color: #fff;
          padding: 1rem 2rem;
          text-align: center;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
