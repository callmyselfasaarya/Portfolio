import React, { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0C0C0C] z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="flex-1">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,8vw,100px)] mb-8">
              Let&apos;s Connect
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.15} y={30}>
            <p className="text-[#D7E2EA] font-light text-[clamp(1rem,1.5vw,1.25rem)] max-w-md opacity-70 mb-12 leading-relaxed">
              I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </FadeIn>

          <FadeIn delay={0.3} y={30} className="space-y-6">
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm opacity-50 mb-1">Email</span>
              <a href="mailto:hello@johndoe.dev" className="text-xl md:text-2xl text-[#D7E2EA] font-medium hover:opacity-70 transition-opacity">
                hello@johndoe.dev
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm opacity-50 mb-1">Location</span>
              <span className="text-xl md:text-2xl text-[#D7E2EA] font-medium">
                San Francisco, CA
              </span>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={40} className="flex-1 w-full max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm">Name</label>
              <input 
                type="text" 
                id="name"
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
                required
                className="w-full bg-transparent border-b-2 border-[#D7E2EA]/30 py-4 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] transition-colors font-light text-lg"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm">Email</label>
              <input 
                type="email" 
                id="email"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
                required
                className="w-full bg-transparent border-b-2 border-[#D7E2EA]/30 py-4 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] transition-colors font-light text-lg"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm">Message</label>
              <textarea 
                id="message"
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-[#D7E2EA]/30 py-4 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] transition-colors font-light text-lg resize-none"
                placeholder="Hello there..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`relative inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-4 text-base outline outline-2 outline-white outline-offset-[-3px] transition-transform hover:scale-105 active:scale-95 mt-4 disabled:opacity-50 disabled:hover:scale-100 ${isSubmitting ? 'cursor-wait' : 'cursor-pointer'}`}
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </FadeIn>
        
      </div>
    </section>
  );
};
