import { motion } from 'motion/react';
import { Star, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Star className="text-gold" size={32} strokeWidth={1.5} />,
      title: "5-Star Experience",
      desc: "Exceptional customer care and a welcoming atmosphere that keeps clients returning."
    },
    {
      icon: <Sparkles className="text-gold" size={32} strokeWidth={1.5} />,
      title: "Premium Grooming",
      desc: "Top-tier products and tools utilized by highly experienced professionals."
    },
    {
      icon: <ShieldCheck className="text-gold" size={32} strokeWidth={1.5} />,
      title: "Clean & Hygienic",
      desc: "Immaculate environment with sterilized equipment for your safety and comfort."
    },
    {
      icon: <MapPin className="text-gold" size={32} strokeWidth={1.5} />,
      title: "Prime Location",
      desc: "Conveniently located at the corner of Haile Selassie & United Nations Ave."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-luxury-gray/30 -skew-x-12 translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80" 
                alt="Professional Barbering" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>
            {/* Floating review card */}
            <div className="absolute -bottom-8 -right-8 bg-luxury-gray p-6 shadow-2xl border border-white/5 hidden md:block w-64 backdrop-blur-md">
              <div className="flex gap-1 text-gold mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-serif text-white/80 text-lg italic tracking-wide font-light">"The attention to detail here is simply unmatched."</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <span className="text-[10px] text-gold tracking-[0.3em] uppercase mb-4 block">The Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              More than a salon, it's a <span className="text-white/60 italic font-light">destination.</span>
            </h2>
            <p className="font-sans text-white/50 text-sm mb-12 leading-relaxed">
              At Harriet's, we believe that looking your best translates to feeling your best. 
              Our team of expert stylists and barbers is dedicated to providing an unparalleled grooming experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="font-sans text-xs text-white uppercase tracking-[0.2em] mb-2">{feature.title}</h4>
                  <p className="font-sans text-xs text-white/40 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
