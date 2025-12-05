import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import QuoteSection from './components/QuoteSection';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DoctorDetail from './components/DoctorDetail';

// Wrapper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Testimonials />
    <Contact />
  </>
);

const AboutPage = () => (
  <div className="pt-20">
    <QuoteSection />
    <Features />
    <Testimonials />
  </div>
);

const ServicesPage = () => (
  <div className="pt-20">
    <Services />
    <Contact />
  </div>
);

const DoctorsPage = () => (
  <div className="pt-20">
    <Doctors />
    <Testimonials />
  </div>
);

const ContactPage = () => (
  <div className="pt-20">
    <Contact />
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-gray-900 bg-white selection:bg-teal-200 selection:text-teal-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:id" element={<DoctorDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;