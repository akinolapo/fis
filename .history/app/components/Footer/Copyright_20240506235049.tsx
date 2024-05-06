
interface CopyrightProps {
  developer: string;
}

const Copyright: React.FC<CopyrightProps> = ({ developer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="text-white text-center py-4">
      <p>&copy; {currentYear} Federation of Igbo Student OAU. Website developed by <a href="https://akinolapo.pages.dev/">{developer}</a>.</p>
    </section>
  );
};

export default Copyright;
