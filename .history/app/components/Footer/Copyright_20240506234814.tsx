import React from 'react';

interface CopyrightProps {
  developer: string;
}

const Copyright: React.FC<CopyrightProps> = ({ developer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>&copy; {currentYear} Your Company. Website developed by {developer}.</p>
    </footer>
  );
};

export default Copyright;
