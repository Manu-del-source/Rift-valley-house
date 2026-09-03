import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RoomsSection from './components/RoomsSection';
import DiningSection from './components/DiningSection';
import ExperiencesSection from './components/ExperiencesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-charcoal">
      <Navbar />
      <main>
        <HeroSection />
        <RoomsSection />
        <DiningSection />
        <ExperiencesSection />
        <GallerySection />
        <AboutSection />
        <BookingSection />
      </main>
      <FooterSection />
    </div>
  );
}
