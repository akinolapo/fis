
interface CopyrightProps {
  developer: string;
}

const Copyright: React.FC<CopyrightProps> = ({ developer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="text-gray-300 text-center py-4">
      <p>&copy; {currentYear} Federation of Igbo Student OAU. Website developed by <a href="https://akinolapo.pages.dev" target="_blank" className="text-gray-300">{developer}</a>.</p>
    </section>
  );
};

export default Copyright;
