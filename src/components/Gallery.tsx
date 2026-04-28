import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80", colSpan: "col-span-1", rowSpan: "row-span-2" },
    { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { url: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80", colSpan: "col-span-1", rowSpan: "row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-luxury-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] text-gold tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Our Work</h2>
            <p className="font-sans text-white/50 text-sm max-w-lg leading-relaxed">
              A glimpse into the artistry and precision we deliver every day. Follow us on social media for more recent styles.
            </p>
          </div>
          <a href="#" className="uppercase flex items-center gap-2 tracking-[0.2em] text-[10px] font-sans text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">
            <Instagram size={14} />
            View Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden group ${img.colSpan} ${img.rowSpan}`}
            >
              <div className="absolute inset-0 bg-luxury-black/30 group-hover:bg-luxury-black/10 transition-colors z-10 duration-500"/>
              <img 
                src={img.url} 
                alt={`Gallery visual ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
