import React from 'react';
import { motion } from 'framer-motion';
import { STEPS, SERVICES } from '../constants';
import { Star, Shield, Clock, Heart, Car, Calendar, Plane, Briefcase } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  chauffeur: <Car size={32} />,
  wedding: <Heart size={32} />,
  airport: <Plane size={32} />,
  corporate: <Briefcase size={32} />,
};

const Features: React.FC = () => {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <>
      {/* Process Section */}
      <section id="process" className="py-20 bg-dark-800 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 skew-x-12 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="md:w-1/3"
            >
              <h2 className="text-gold-500 font-sans font-bold tracking-widest uppercase text-sm mb-2">How It Works</h2>
              <h3 className="font-serif text-4xl font-bold text-white mb-6">Follow 3 Easy Steps</h3>
              <p className="text-gray-400 leading-relaxed">
                Booking a luxury car shouldn't be complicated. We've streamlined the process to ensure you get on the road in the car of your dreams as quickly as possible.
              </p>
            </motion.div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {STEPS.map((step, idx) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: ease, delay: idx * 0.2 }}
                  className="bg-dark-900 p-6 rounded-lg border border-white/5 hover:border-gold-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold-500/10 text-gold-500 flex items-center justify-center rounded-full text-xl font-serif font-bold mb-4 group-hover:bg-gold-500 group-hover:text-black transition-all duration-500">
                    {step.id}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="text-gold-500 font-sans font-medium tracking-widest uppercase text-sm mb-3"
            >
              Why Choose Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              Premium Services
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: ease, delay: idx * 0.1 }}
                className="p-8 bg-dark-900 rounded-xl border border-white/5 hover:bg-dark-800 transition-all text-center group"
              >
                <div className="inline-flex p-4 rounded-full bg-dark-800 text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-gold-500/30">
                  {iconMap[service.icon]}
                </div>
                <h4 className="text-xl font-bold mb-3 font-serif">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12"
          >
            <div className="flex items-center gap-4">
              <Shield className="text-gold-500 w-10 h-10" />
              <div>
                <h4 className="font-bold text-lg">Verified Fleet</h4>
                <p className="text-xs text-gray-400">Real photos, no stock images. What you see is what you get.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Star className="text-gold-500 w-10 h-10" />
              <div>
                <h4 className="font-bold text-lg">Top Rated Service</h4>
                <p className="text-xs text-gray-400">Punctual, friendly, and unmatched service quality.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-gold-500 w-10 h-10" />
              <div>
                <h4 className="font-bold text-lg">24/7 Support</h4>
                <p className="text-xs text-gray-400">Always available to assist with your travel needs.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;