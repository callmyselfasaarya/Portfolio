import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Download, ArrowRight } from 'lucide-react';

const HireMeCTA: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Aarya_Resume.pdf";
    link.click();
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-24 -mt-24" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -mr-24 -mb-24" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Ready to <span className="text-blue-200">scale</span> your product?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl mx-auto font-medium">
            Currently accepting new projects and consulting opportunities for high-growth tech teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
               size="lg" 
               className="bg-white text-primary hover:bg-blue-50 w-full sm:w-auto text-lg h-14 px-8 font-bold rounded-xl"
               onClick={() => window.location.href = 'mailto:contact@example.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
               variant="outline" 
               size="lg" 
               className="border-white/30 hover:bg-white/10 text-white w-full sm:w-auto text-lg h-14 px-8 font-bold rounded-xl"
               onClick={() => window.open('https://wa.me/something', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Quick Chat
            </Button>
          </div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="mt-12 flex items-center justify-center gap-6"
          >
             <button 
                onClick={handleDownloadResume}
                className="text-sm font-semibold flex items-center gap-2 hover:text-blue-200 transition-colors"
             >
               <Download size={16} />
               Download Resume (PDF)
             </button>
             <span className="h-4 w-px bg-white/20" />
             <span className="text-sm text-blue-200/60 font-medium">
               Avg. response time: &lt; 2 hours
             </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMeCTA;
