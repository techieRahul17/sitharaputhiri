import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import About from './components/About';
import Gallery from './components/Gallery';
import Preorder from './components/Preorder';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="App relative font-poppins text-gray-800 overflow-hidden bg-white">
      <Background />
      <div className="relative z-10">
        <MusicPlayer />
        <Hero />
        <About />
        <Gallery />
        <Preorder />
        <Pricing />
        <WhyChooseUs />
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default App;
