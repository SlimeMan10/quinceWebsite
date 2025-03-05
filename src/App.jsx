import React, { useState, useEffect, useRef } from 'react';
import { scrollToSection } from './utils.js';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicStatus, setShowMusicStatus] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  
  const timelineRef = useRef(null);
  const audioRef = useRef(null);
  const eventDate = new Date('April 13, 2025 16:00:00').getTime();
  
  // English and Spanish translations
  const translations = {
    en: {
      title: "Samara's Quinceañera",
      subtitle: "Join us to celebrate this special day",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      countdownTitle: "Countdown to the big day",
      languageBtn: "Español",
      musicPlay: "Play Music",
      musicPause: "Pause Music",
      scrollText: "Scroll Down",
      aboutTitle: "About the Celebration",
      dateTime: "Date & Time",
      dateValue: "April 13, 2025 • 4:00 PM - 9:00 PM",
      location: "Location",
      address: "910 Ninth St SE, Auburn, WA 98002, United States",
      timelineTitle: "Event Timeline",
      rsvpTitle: "RSVP",
      rsvpText: "Please let us know if you'll be joining us. The last day to RSVP is April 2.",
      rsvpButton: "Text RSVP: 253-232-6375",
      events: [
        {
          time: "4:00 PM",
          title: "Guest Arrival",
          description: "Welcome drinks and mingling"
        },
        {
          time: "5:00 PM",
          title: "Grand Entrance",
          description: "Formal introduction of Samara and her court"
        },
        {
          time: "5:30 PM",
          title: "Father-Daughter Dance",
          description: "A special moment between Samara and her father"
        },
        {
          time: "6:00 PM",
          title: "Dinner Service",
          description: "Formal dinner and refreshments"
        },
        {
          time: "7:30 PM",
          title: "Cutting of the Cake",
          description: "Celebration with dessert and toasts"
        },
        {
          time: "8:00 PM",
          title: "Dance Party",
          description: "Music and celebration until 9:00 PM"
        }
      ]
    },
    es: {
      title: "Quinceañera de Samara",
      subtitle: "Acompáñanos a celebrar este día especial",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
      countdownTitle: "Cuenta regresiva para el gran día",
      languageBtn: "English",
      musicPlay: "Reproducir Música",
      musicPause: "Pausar Música",
      scrollText: "Desliza Hacia Abajo",
      aboutTitle: "Sobre la Celebración",
      dateTime: "Fecha y Hora",
      dateValue: "13 de Abril, 2025 • 4:00 PM - 9:00 PM",
      location: "Ubicación",
      address: "910 Ninth St SE, Auburn, WA 98002, Estados Unidos",
      timelineTitle: "Cronograma del Evento",
      rsvpTitle: "RSVP",
      rsvpText: "Por favor, háganos saber si se unirá a nosotros. El último día para confirmar asistencia es el 2 de abril.",
      rsvpButton: "Enviar mensaje RSVP: 253-232-6375",
      events: [
        {
          time: "4:00 PM",
          title: "Llegada de Invitados",
          description: "Bebidas de bienvenida y socialización"
        },
        {
          time: "5:00 PM",
          title: "Gran Entrada",
          description: "Presentación formal de Samara y su corte"
        },
        {
          time: "5:30 PM",
          title: "Baile Padre-Hija",
          description: "Un momento especial entre Samara y su padre"
        },
        {
          time: "6:00 PM",
          title: "Servicio de Cena",
          description: "Cena formal y refrescos"
        },
        {
          time: "7:30 PM",
          title: "Corte del Pastel",
          description: "Celebración con postre y brindis"
        },
        {
          time: "8:00 PM",
          title: "Fiesta de Baile",
          description: "Música y celebración hasta las 9:00 PM"
        }
      ]
    }
  };
  
  const text = translations[language];
  
  // Initialize background elements
  useEffect(() => {
    const container = document.querySelector('.particles');
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Add royal-themed particles and decorative elements
    const particleCount = 15;
    const crownCount = 4;
    const fleurCount = 6;
    const catCount = 8;
    const ribbonCount = 10;
    const starCount = 12;
    
    // Add shimmering gold particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('royal-particle');
      
      // Random size between 5px and 15px
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
    }
    
    // Add crowns
    for (let i = 0; i < crownCount; i++) {
      const crown = document.createElement('div');
      crown.classList.add('crown');
      
      // Random size
      const size = Math.random() * 20 + 30;
      crown.style.width = `${size}px`;
      crown.style.height = `${size}px`;
      
      // Random position
      crown.style.left = `${Math.random() * 100}%`;
      crown.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      crown.style.animationDelay = `${Math.random() * 10}s`;
      
      container.appendChild(crown);
    }
    
    // Add fleur-de-lis
    for (let i = 0; i < fleurCount; i++) {
      const fleur = document.createElement('div');
      fleur.classList.add('fleur');
      
      // Random size
      const size = Math.random() * 15 + 15;
      fleur.style.width = `${size}px`;
      fleur.style.height = `${size}px`;
      
      // Random position
      fleur.style.left = `${Math.random() * 100}%`;
      fleur.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration
      fleur.style.animationDuration = `${Math.random() * 30 + 40}s`;
      
      container.appendChild(fleur);
    }
    
    // Add cats
    for (let i = 0; i < catCount; i++) {
      const cat = document.createElement('div');
      cat.classList.add('cat');
      
      // Random size
      const size = Math.random() * 20 + 25;
      cat.style.width = `${size}px`;
      cat.style.height = `${size}px`;
      
      // Random position
      cat.style.left = `${Math.random() * 100}%`;
      cat.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      cat.style.animationDelay = `${Math.random() * 15}s`;
      
      container.appendChild(cat);
    }
    
    // Add decorative ribbons
    for (let i = 0; i < ribbonCount; i++) {
      const ribbon = document.createElement('div');
      ribbon.classList.add('ribbon');
      
      // Random height and width
      const height = Math.random() * 60 + 40;
      const width = Math.random() * 3 + 2;
      ribbon.style.height = `${height}px`;
      ribbon.style.width = `${width}px`;
      
      // Random position
      ribbon.style.left = `${Math.random() * 100}%`;
      ribbon.style.top = `${Math.random() * 100}%`;
      
      // Random rotation
      const rotation = Math.random() * 360;
      ribbon.style.transform = `rotate(${rotation}deg)`;
      
      // Random animation delay
      ribbon.style.animationDelay = `${Math.random() * 10}s`;
      
      container.appendChild(ribbon);
    }
    
    // Add sparkling stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random size
      const size = Math.random() * 10 + 8;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`;
      
      container.appendChild(star);
    }
  }, []);
  
  // In your audio setup useEffect
  useEffect(() => {
    // Create audio element
    const audio = document.createElement('audio');
    audio.src = "/ゲンダイ.mp3";
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;
    
    // Create "Now Playing" info
    const musicControls = document.querySelector('.music-controls');
    if (musicControls) {
      // Check if the now-playing element already exists
      const existingNowPlaying = musicControls.querySelector('.now-playing');
      
      // Only create a new element if one doesn't already exist
      if (!existingNowPlaying) {
        const nowPlaying = document.createElement('div');
        nowPlaying.className = 'now-playing';
        nowPlaying.innerHTML = `
          <div class="song-info">
            <div class="song-title">ゲンダイ</div>
            <div class="song-artist">フレネシ</div>
          </div>
        `;
        musicControls.prepend(nowPlaying);
      }
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);
  
  // Countdown timer
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance < 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    };
    
    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Timeline scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineItems = Array.from(timelineRef.current.querySelectorAll('.timeline-item'));
      const newVisibleItems = [];
      
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          newVisibleItems.push(index);
        }
      });
      
      setVisibleItems(newVisibleItems);
    };
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Language toggle
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
  
  // Music control
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Audio play failed:", error);
          });
        }
      }
    }
    
    setIsPlaying(!isPlaying);
    setShowMusicStatus(true);
    
    setTimeout(() => {
      setShowMusicStatus(false);
    }, 2000);
  }; 
  
  // RSVP function - FIXED to prevent the double-click issue
  const handleRSVP = (e) => {
    e.preventDefault(); // Prevent default button behavior
    e.stopPropagation(); // Stop event propagation
    
    // Use window.open instead of window.location.href for more reliable behavior
    window.open(`sms:2532326375?body=Hello, I would like to RSVP for Samara's Quinceañera on April 13, 2025.`, '_blank');
  };
  
  return (
    <>
      <div className="background">
        <div className="particles"></div>
      </div>
      
      <div className="lang-toggle">
        <button className="btn" onClick={toggleLanguage}>
          <span className="lang-icon">🌐</span> {text.languageBtn}
        </button>
      </div>
      
      <div className="music-controls">
        {showMusicStatus && (
          <div className="music-status show">
            {isPlaying ? text.musicPause : text.musicPlay}
          </div>
        )}
        <div className="music-btn" onClick={toggleMusic}>
          <span className="music-icon">&#9835;</span>
        </div>
      </div>
      
      <section id="main">
        <div className="container">
          <h1 className="title">{text.title}</h1>
          <p className="subtitle">{text.subtitle}</p>
          
          <h3 className="subtitle">{text.countdownTitle}</h3>
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-num">{countdown.days}</div>
              <div className="countdown-label">{text.days}</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-num">{countdown.hours}</div>
              <div className="countdown-label">{text.hours}</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-num">{countdown.minutes}</div>
              <div className="countdown-label">{text.minutes}</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-num">{countdown.seconds}</div>
              <div className="countdown-label">{text.seconds}</div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('info')}>
          <i className="fas fa-chevron-down"></i>
          <p>{text.scrollText}</p>
        </div>
      </section>
      
      <section id="info">
        <div className="container">
          <div className="info-container">
            <div className="photo-container">
              {/* Updated to use the provided photo path */}
              <img src="/IMG_4935.JPG" alt="Samara" />
            </div>
            <div className="info-text">
              <h3>{text.aboutTitle}</h3>
              <p>
                <span className="highlight">{text.dateTime}:</span> {text.dateValue}
              </p>
              <p>
                <span className="highlight">{text.location}:</span><br />
                <i className="fas fa-map-marker-alt location-icon"></i> {text.address}
              </p>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('timeline')}>
          <i className="fas fa-chevron-down"></i>
          <p>{text.scrollText}</p>
        </div>
      </section>
      
      <section id="timeline">
        <div className="container">
          <h2 className="title">{text.timelineTitle}</h2>
          
          <div className="timeline-container" ref={timelineRef}>
            {text.events.map((event, index) => (
              <div 
                key={index} 
                className={`timeline-item ${visibleItems.includes(index) ? 'visible' : ''}`}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-time">{event.time}</div>
                  <div className="timeline-title">{event.title}</div>
                  <div className="timeline-desc">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('rsvp')}>
          <i className="fas fa-chevron-down"></i>
          <p>{text.scrollText}</p>
        </div>
      </section>
      
      <section id="rsvp">
        <div className="container">
          <h2 className="title">{text.rsvpTitle}</h2>
          <p className="rsvp-text">{text.rsvpText}</p>
          {/* Fixed RSVP button with improved click handling */}
          <button 
            className="rsvp-btn" 
            onClick={handleRSVP}
            style={{ cursor: 'pointer' }} // Ensure cursor indicates clickable
          >
            <i className="fas fa-comment-alt"></i> {text.rsvpButton}
          </button>
        </div>
      </section>
    </>
  );
};

export default App;