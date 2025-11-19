import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for background
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  
  // Fade out content
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Custom ease for premium feel
  const transition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

  useEffect(() => {
    // Force play to handle potential browser autoplay policies or race conditions
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark-900">
      {/* Background Video Container */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-900/90 z-10" /> 
        
        {/* Static Image Fallback (Visible until video loads) */}
        <img 
            src="https://framerusercontent.com/images/DlyprOzbumko92by18agLw8Vas.jpg" 
            alt="Luxury Car Background"
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
        />

        <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            poster="https://framerusercontent.com/images/DlyprOzbumko92by18agLw8Vas.jpg"
        >
            {/* Primary Source: Local video file from user */}
            <source src="/hero-video.mp4" type="video/mp4" />

            {/* Fallback Source: High Quality Luxury Car Video from Coverr CDN */}
            <source src="https://cdn.coverr.co/videos/coverr-driving-a-lamborghini-huracan-5647/1080p.mp4" type="video/mp4" />

            Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="overflow-hidden mb-4">
            <motion.h2 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ...transition, delay: 0.2 }}
                className="text-gold-400 uppercase tracking-[0.3em] text-sm md:text-base font-semibold"
            >
                The Suvihaar Standard
            </motion.h2>
        </div>

        <div className="overflow-hidden mb-6">
            <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
            Experience the Most Luxurious <br />
            <span className="italic font-light text-gray-200 block mt-2">Chauffeur Service</span>
            </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.8 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Luxury Cars for Wedding, Corporate Events, Airport Transfers & Outstation Tours. 
          Authentic Fleet photos only. No Stock images.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#fleet"
            className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold text-lg rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Explore Fleet
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href={COMPANY_INFO.whatsappLink}
            className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-medium text-lg rounded-sm transition-all duration-300 backdrop-blur-sm"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-20 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div 
            animate={{ height: [0, 60, 0], y: [0, 0, 20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-gradient-to-b from-white/50 to-transparent" 
        />
      </motion.div>
    </section>
  );
};

export default Hero;