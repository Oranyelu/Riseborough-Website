import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Reliability from './components/Reliability';
import Gallery from './components/Gallery';
import Culinary from './components/Culinary';
import Referral from './components/Referral';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Start animation by re-triggering css animation 
          // (Adding a class that has the animation)
          if(entry.target.classList.contains('fade-in')) {
            entry.target.style.animationPlayState = 'running';
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    
    // initially pause animation so it happens on scroll
    elements.forEach(el => {
      el.style.animationPlayState = 'paused';
      el.style.opacity = '0'; // hide elements before they scroll into view
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Hero onOpenBooking={() => setBookingOpen(true)} />
      <Reliability />
      <Gallery />
      <Culinary />
      <Referral />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

export default App;
