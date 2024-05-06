import About from "./components/About/About";
import Excos from "./components/Excos/Excos";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to Our Website"
        subtitle="Discover the possibilities"
      />
      <About/>
      <Excos/>
      <Gallery/>
    </main>
  );
}
