
interface CopyrightProps {
  developer: string;
}

const Copyright: React.FC<CopyrightProps> = ({ developer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-gray-900 text-white text-center py-4">
      <p>&copy; {currentYear} Federation of Igbo Student OAU. Website developed by {developer}.</p>
    </footer>
  );
};

export default Copyright;
