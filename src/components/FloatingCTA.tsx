import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCTA() {
  const whatsappNumber = "260979968651";
  const whatsappMessage = encodeURIComponent("Hello Harriet's, I'd like to book an appointment.");

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
    >
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-end"
      >
        <div className="mr-4 bg-luxury-gray/90 border border-white/10 px-4 py-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden sm:block backdrop-blur-sm">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white whitespace-nowrap">Book via WhatsApp</span>
        </div>
        <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-black shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:scale-110 transition-transform relative">
          <div className="absolute inset-0 rounded-full border border-gold animate-ping opacity-20"></div>
          <MessageCircle size={24} strokeWidth={2} />
        </div>
      </a>
    </motion.div>
  );
}
