import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chanda M.",
      text: "Best place for all your beauty styling needs. Amazing customer care and professional service. The fade I got here was unmatched.",
      role: "Client"
    },
    {
      name: "Sarah L.",
      text: "The salon environment is stunning and incredibly clean. My braids have never looked this good. Definitely coming back!",
      role: "Client"
    },
    {
      name: "David K.",
      text: "Highly professional staff. They really know what they're doing when it comes to beard grooming and hot towel shaves. 5-star experience.",
      role: "Client"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-[10px] text-gold tracking-[0.3em] uppercase mb-4 block">Client Experiences</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-16">Words of Praise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-luxury-gray p-10 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-center gap-1 text-gold mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="font-serif text-lg text-white/80 italic mb-8 leading-relaxed font-light">
                  "{test.text}"
                </p>
              </div>
              <div>
                <div className="w-8 h-[1px] bg-gold mx-auto mb-4"></div>
                <p className="font-sans font-medium text-white tracking-widest uppercase text-[10px]">{test.name}</p>
                <p className="font-sans text-[9px] text-white/40 mt-1 uppercase tracking-[0.2em]">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
