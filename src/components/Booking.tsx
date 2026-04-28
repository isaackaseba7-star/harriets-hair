import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MessageSquare, Phone, X, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const whatsappNumber = "260979968651";
  const whatsappMessage = encodeURIComponent("Hello Harriet's, I'd like to book an appointment.");

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    serviceName: '',
    date: '',
    time: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'service') {
      const select = e.target as HTMLSelectElement;
      // when the placeholder option is selected, its text might be 'Select a service...'
      // just store the value correctly
      const serviceName = select.options[select.selectedIndex].text;
      setFormData(prev => ({ ...prev, [name]: value, serviceName }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert("Please fill in all fields.");
      return;
    }
    setShowModal(true);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      setShowModal(false);
      setIsConfirmed(false);
      setFormData({
        name: '',
        phone: '',
        service: '',
        serviceName: '',
        date: '',
        time: ''
      });
    }, 3000);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <section id="booking" className="py-24 bg-luxury-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] text-gold tracking-[0.3em] uppercase mb-4 block">Reservations</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Secure Your Time</h2>
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-sm mb-12">
              Secure your appointment today. Whether it's a routine trim or a complete transformation, our specialists are ready to elevate your look.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={16} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">Direct Call</h4>
                  <a href="tel:+260979968651" className="text-white text-sm font-sans hover:text-gold transition-colors">+260 97 9968651</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="text-gold" size={16} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">WhatsApp Booking</h4>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-sm font-sans hover:text-gold transition-colors"
                  >
                    Message us to book
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="text-gold" size={16} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">Opening Hours</h4>
                  <p className="text-white text-sm font-sans">Opens at 8:00 AM Daily</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black p-10 border border-white/5"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-sans">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-sans">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="+260..."
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-sans">Service Required</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-black border-b border-white/10 px-0 py-2 text-white font-sans text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option value="">Select a service...</option>
                  <option value="haircut">Men's Haircut & Fade</option>
                  <option value="beard">Beard Grooming</option>
                  <option value="styling">Women's Hair Styling</option>
                  <option value="braiding">Braiding</option>
                  <option value="nails">Manicure & Pedicure</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-sans">Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white font-sans text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-sans">Time</label>
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white font-sans text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-gold text-black font-sans uppercase tracking-[0.2em] text-[10px] font-bold py-5 mt-6 hover:bg-white transition-colors">
                Request Appointment
              </button>
              
              <p className="text-center text-white/30 text-[10px] font-sans tracking-wide mt-6">
                We will call or message to confirm your booking.
              </p>
            </form>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCancel}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-luxury-gray border border-white/10 p-8 max-w-md w-full relative z-10 shadow-2xl"
            >
              <button 
                onClick={handleCancel}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {!isConfirmed ? (
                <>
                  <h3 className="font-serif text-2xl text-white mb-6">Confirm Reservation</h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans mb-1">Name</p>
                      <p className="text-white text-sm font-sans">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans mb-1">Phone</p>
                      <p className="text-white text-sm font-sans">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans mb-1">Service</p>
                      <p className="text-white text-sm font-sans">{formData.serviceName}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans mb-1">Date</p>
                        <p className="text-white text-sm font-sans">{formData.date}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans mb-1">Time</p>
                        <p className="text-white text-sm font-sans">{formData.time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={handleCancel}
                      className="flex-1 py-3 border border-white/20 text-white font-sans uppercase tracking-widest text-[10px] hover:bg-white/10 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleConfirm}
                      className="flex-1 py-3 bg-gold text-black font-bold font-sans uppercase tracking-widest text-[10px] hover:bg-white transition-colors"
                    >
                      Confirm
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-white mb-2">Booking Confirmed</h3>
                  <p className="text-white/60 text-sm font-sans leading-relaxed">
                    Thank you, {formData.name.split(' ')[0]}. We look forward to seeing you on {formData.date} at {formData.time}.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
