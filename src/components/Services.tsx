import { motion } from 'motion/react';
import { Scissors, Sparkles, Smile, Star } from 'lucide-react';

export default function Services() {
  const menServices = [
    { name: 'Haircuts', desc: 'Precision cuts tailored to your head shape and style.' },
    { name: 'Beard Grooming', desc: 'Sculpting, trimming, and hot towel treatments.' },
    { name: 'Fades & Styling', desc: 'Sharp fades and modern styling techniques.' },
  ];

  const womenServices = [
    { name: 'Hair Styling', desc: 'Blowouts, silk presses, and elegant updos.' },
    { name: 'Braiding', desc: 'Neat, protective, and stunning braided styles.' },
    { name: 'Wigs & Weaves', desc: 'Flawless installations and maintenance.' },
    { name: 'Treatments', desc: 'Deep conditioning and scalp repair.' },
  ];

  const beautyServices = [
    { name: 'Manicure & Pedicure', desc: 'Premium nail care, gel polish, and acrylics.' },
    { name: 'Facial Treatments', desc: 'Rejuvenating skincare treatments.' },
  ];

  return (
    <section id="services" className="py-24 bg-luxury-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Our Services</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="font-sans text-sm tracking-widest text-white/60 uppercase">Tailored for Excellence</p>
        </div>

        <div className="grid grid-cols-1 mt-12 gap-16 lg:grid-cols-3 lg:gap-8">
          {/* Men's Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-white/5 flex flex-col justify-between group bg-luxury-black/30 hover:bg-luxury-black/50 transition-colors"
          >
            <div>
              <span className="text-[10px] text-gold tracking-[0.3em] uppercase">01 / Gentlemen</span>
              <h3 className="font-serif text-2xl mt-4 mb-6">Barbershop & Grooming</h3>
              <ul className="space-y-6">
                {menServices.map((service, idx) => (
                  <li key={idx} className="group-hover:translate-x-1 transition-transform">
                    <h4 className="font-sans text-sm text-gold mb-1 font-medium">{service.name}</h4>
                    <p className="font-sans text-xs text-white/40 leading-relaxed">{service.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-[2px] bg-white/5 overflow-hidden mt-10">
              <div className="w-1/3 h-full bg-gold transition-all duration-700 ease-out group-hover:w-full"></div>
            </div>
          </motion.div>

          {/* Women's Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 border border-white/5 flex flex-col justify-between group bg-luxury-black/30 hover:bg-luxury-black/50 transition-colors"
          >
            <div>
              <span className="text-[10px] text-gold tracking-[0.3em] uppercase">02 / Ladies</span>
              <h3 className="font-serif text-2xl mt-4 mb-6">Styling & Braiding</h3>
              <ul className="space-y-6">
                {womenServices.map((service, idx) => (
                  <li key={idx} className="group-hover:translate-x-1 transition-transform">
                    <h4 className="font-sans text-sm text-gold mb-1 font-medium">{service.name}</h4>
                    <p className="font-sans text-xs text-white/40 leading-relaxed">{service.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-[2px] bg-white/5 overflow-hidden mt-10">
              <div className="w-1/2 h-full bg-gold transition-all duration-700 ease-out group-hover:w-full"></div>
            </div>
          </motion.div>

          {/* Beauty Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-10 border border-white/5 flex flex-col justify-between group bg-luxury-black/30 hover:bg-luxury-black/50 transition-colors"
          >
            <div>
              <span className="text-[10px] text-gold tracking-[0.3em] uppercase">03 / Beauty</span>
              <h3 className="font-serif text-2xl mt-4 mb-6">Treatments & Care</h3>
              <ul className="space-y-6">
                {beautyServices.map((service, idx) => (
                  <li key={idx} className="group-hover:translate-x-1 transition-transform">
                    <h4 className="font-sans text-sm text-gold mb-1 font-medium">{service.name}</h4>
                    <p className="font-sans text-xs text-white/40 leading-relaxed">{service.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-[2px] bg-white/5 overflow-hidden mt-10">
              <div className="w-1/4 h-full bg-gold transition-all duration-700 ease-out group-hover:w-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
