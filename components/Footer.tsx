import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-900 border-t border-white/10 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side: Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={COMPANY_INFO.logo} alt="Logo" className="h-12 w-auto" />
              <span className="font-serif text-2xl font-bold">SUVIHAAR</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Bangalore's premier luxury car rental service. Elevating your journey with world-class vehicles and impeccable chauffeur service.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-dark-800 rounded-lg group-hover:bg-gold-500 group-hover:text-black transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm w-3/4">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-dark-800 rounded-lg group-hover:bg-gold-500 group-hover:text-black transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-dark-800 rounded-lg group-hover:bg-gold-500 group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://www.instagram.com/suvihaarluxurycars/" target="_blank" rel="noreferrer" className="p-3 border border-white/10 rounded-full hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/19CnzU7gyF/" target="_blank" rel="noreferrer" className="p-3 border border-white/10 rounded-full hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="h-[400px] rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src="https://maps.google.com/maps?q=12.922426963515107,77.56976098623906&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Suvihaar Location"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Suvihaar Luxury Car Rental. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;