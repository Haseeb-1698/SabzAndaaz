"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const AppComponent: React.FC = () => {
  const [isSliderLoaded, setIsSliderLoaded] = useState(false);

  useEffect(() => {
    setIsSliderLoaded(true);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("Failed to load image:", e.currentTarget.src);
    // Use a data URL for a gray placeholder as fallback
    e.currentTarget.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="App">
      <div className="bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-pink-100 text-gray-900 p-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center">
 <Image
      src="https://www.mediafire.com/conv2/602ctspvrrjjziu/IMG_7888.JPG" 
      alt="Sabaz Andaaz Logo"
      width={70}
      height={70}
      priority
      className="mr-4 rounded-full object-cover"
    />
    <h1 className="text-2xl font-bold">Sabaz Andaaz</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 list-none">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#slides" className="nav-link">Initiatives</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#vision" className="nav-link">Vision</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-pink-200 to-green-200 text-gray-900 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Redefining Pakistani Fashion</h2>
          <p className="text-lg mb-6">Sustainable fashion with a touch of tradition. Join us in reducing waste and celebrating culture.</p>
          <a href="#contact" className="cta-button bg-pink-500 text-white px-6 py-3 rounded-full">Get Involved</a>
        </section>

        {/* Slides Section */}
        <section id="slides" className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Initiatives</h2>
          {isSliderLoaded ? (
            <Slider {...sliderSettings} className="slick-slider">
              <div className="relative w-full h-[450px]">
                <Image
                  src="https://images.unsplash.com/photo-1616761512547-ea151d8a56d5?q=80&w=3912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sustainable Fashion"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  loading="eager"
                  onError={handleImageError}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAECAKl7GBAeAAAAAElFTkSuQmCC"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-xl font-bold">Promoting Sustainability</p>
                </div>
              </div>
              <div className="relative w-full h-[450px]">
                <Image
                  src="https://images.unsplash.com/photo-1648106269305-e9fc329383ba?q=80&w=3792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cultural Heritage"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="eager"
                  onError={handleImageError}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAECAKl7GBAeAAAAAElFTkSuQmCC"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-xl font-bold">Celebrating Cultural Heritage</p>
                </div>
              </div>
              <div className="relative w-full h-[450px]">
                <Image
                  src="https://images.unsplash.com/photo-1701360392267-33c5bbbbd9fd?q=80&w=3779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Student Initiative"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="eager"
                  onError={handleImageError}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAECAKl7GBAeAAAAAElFTkSuQmCC"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-xl font-bold">Student-Led at FAST NUCES</p>
                </div>
              </div>
            </Slider>
          ) : (
            <div className="text-center">Loading slider...</div>
          )}
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-pink-100 text-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p>Sabaz Andaaz is a student-led initiative at FAST NUCES Islamabad, dedicated to transforming Pakistani fashion through sustainability and tradition.</p>
            </div>
            <div className="card bg-pink-100 text-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Campus Society</h3>
              <p>We are a campus-level society at FAST NUCES Islamabad, working to reduce textile waste and promote upcycling while celebrating local craftsmanship.</p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="bg-pink-100 text-gray-900 py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sustainable Future</h3>
              <p>We envision a future where every outfit tells a story of sustainability, responsibility, and positive impact.</p>
            </div>
            <div className="card bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cultural Integration</h3>
              <p>We blend heritage-inspired designs with modern aesthetics, creating products that resonate with Pakistani consumers.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-900 text-white py-16 px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">For donations and collaborations, reach out to us at:</p>
          <p className="mb-4">📍 FAST NUCES Islamabad</p>
          <p>Email: <a href="mailto:sabaz.andaaz@example.com" className="email-link">sabaz.andaaz@example.com</a></p>
        </section>

        {/* Footer */}
        <footer className="bg-pink-100 text-gray-900 p-4 text-center">
          <p className="mb-2">Follow us on social media:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/sabaz_andaz" target="_blank" rel="noreferrer" className="social-link hover:text-pink-500">Instagram</a>
            <a href="https://www.youtube.com/@Pehnodobara" target="_blank" rel="noreferrer" className="social-link hover:text-pink-500">YouTube</a>
          </div>
          <p className="mt-2">© 2025 Sabaz Andaaz. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AppComponent;
