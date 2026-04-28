import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/60 to-luxury-black bg-opacity-70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-[12px] uppercase tracking-[0.4em] mb-4 block"
        >
          The Art of Refinement
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl leading-[1.1] mb-6"
        >
          Premium Grooming <br/><span className="italic font-light text-white/80">& Beauty</span> Experience
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-sm md:text-base max-w-2xl mx-auto tracking-wide leading-relaxed mb-8"
        >
          Where style meets precision. Professional hair, beauty, and grooming services for the modern individual in Lusaka.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <a 
            href="#booking" 
            className="px-8 py-4 bg-gold text-luxury-black font-bold text-xs uppercase tracking-widest w-full sm:w-auto text-center transition-colors hover:bg-white"
          >
            Book Appointment
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest w-full sm:w-auto text-center transition-colors hover:bg-white/10"
          >
            Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[0.6rem] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20">
          <motion.div 
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
