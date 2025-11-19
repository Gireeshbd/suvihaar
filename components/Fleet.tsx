import React from 'react';
import { motion } from 'framer-motion';
import { CARS } from '../constants';
import { Users, Settings, Disc } from 'lucide-react';

const Fleet: React.FC = () => {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section id="fleet" className="py-24 bg-dark-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-gold-500 font-sans font-medium tracking-widest uppercase text-sm mb-3"
          >
            Our Collection
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
          >
            Explore Our Luxury Fleet
          </motion.h3>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="w-24 h-1 bg-gold-500 mx-auto" 
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: ease, delay: index * 0.1 }}
              className="group relative bg-dark-800 rounded-xl overflow-hidden border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-900/5"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-dark-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80 z-10" />
                <motion.img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: ease }}
                />
                <div className="absolute top-4 right-4 z-20 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {car.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 -mt-12">
                <div className="bg-dark-800/90 backdrop-blur-md p-4 rounded-lg border border-white/5 shadow-lg group-hover:border-gold-500/30 transition-colors duration-300">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">{car.name}</h3>
                  <p className="text-gold-400 font-medium text-lg mb-4">
                    {car.price} <span className="text-xs text-gray-400 font-normal">/ {car.priceUnit}</span>
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/10 text-gray-400 text-xs">
                    <div className="flex flex-col items-center gap-1">
                      <Settings size={16} className="text-gold-500" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Disc size={16} className="text-gold-500" />
                      <span>{car.drive}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Users size={16} className="text-gold-500" />
                      <span>{car.seats} Seats</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/917892673522?text=I'm interested in booking the ${car.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-white text-black font-bold py-3 mt-4 rounded hover:bg-gold-500 transition-colors uppercase text-sm tracking-widest"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;