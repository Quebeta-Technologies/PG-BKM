import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import Rooms from './components/Rooms.jsx';
import Amenities from './components/Amenities.jsx';
import Food from './components/Food.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Locations from './components/Locations.jsx';
import Testimonials from './components/Testimonials.jsx';
import Gallery from './components/Gallery.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Rooms />
        <Amenities />
        <Food />
        <HowItWorks />
        <Locations />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}