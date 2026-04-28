import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border border-gold flex items-center justify-center font-serif text-lg font-bold text-gold">H</div>
              <h3 className="font-serif text-2xl tracking-widest text-white uppercase">Harriet's</h3>
            </div>
            <p className="font-sans text-white/60 text-xs leading-relaxed max-w-sm mb-8">
              A premium salon and barbershop in Lusaka offering top-tier grooming and beauty services in a luxurious, welcoming environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white opacity-60 italic hover:border-gold hover:text-gold hover:opacity-100 transition-all shadow-sm">
                Ig
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white opacity-60 italic hover:border-gold hover:text-gold hover:opacity-100 transition-all shadow-sm">
                Fb
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white opacity-60 italic hover:border-gold hover:text-gold hover:opacity-100 transition-all shadow-sm">
                Wa
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[10px] text-gold font-medium uppercase tracking-[0.2em] mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="font-sans text-sm text-white/80 hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="font-sans text-sm text-white/80 hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="font-sans text-sm text-white/80 hover:text-gold transition-colors">Reviews</a></li>
              <li><a href="#booking" className="font-sans text-sm text-white/80 hover:text-gold transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] text-gold font-medium uppercase tracking-[0.2em] mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="font-sans text-sm text-white/80 leading-relaxed mb-4">
                  Plot 4718, Corner of Haile Selassie<br />
                  & United Nations Ave,<br />
                  Lusaka, Zambia
                </span>
                <span className="font-sans text-sm text-white/80 leading-relaxed">
                  +260 97 9968651<br/>Open from 8 AM Daily
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Header */}
        <div className="w-full h-[200px] bg-luxury-gray border border-white/10 mb-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15386.410940342938!2d28.307521!3d-15.420658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f35e98218967%3A0xe5a36ebd77d33eb!2sUnited%20Nations%20Ave%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1714571212345!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(0.8)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Harriet's Location"
          ></iframe>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/40 tracking-widest uppercase">
            © {new Date().getFullYear()} Harriet's Saloon & Barbershop.
          </p>
          <p className="font-sans text-xs text-white/40 tracking-widest uppercase">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
