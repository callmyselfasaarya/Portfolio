import React from 'react';
import { motion } from 'framer-motion';
import { Home, Layout, BookOpen, MessageSquare, Search } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', action: () => navigate('/') },
    { id: 'projects', icon: Layout, label: 'Work', action: () => {
        if (!isHome) navigate('/');
        setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }},
    { id: 'blog', icon: BookOpen, label: 'Blog', action: () => {
        if (!isHome) navigate('/');
        setTimeout(() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }},
    { id: 'contact', icon: MessageSquare, label: 'Chat', action: () => {
        if (!isHome) navigate('/');
        setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }},
    { id: 'search', icon: Search, label: 'Search', action: () => {
        // Trigger Ctrl+K programmatically
        const event = new KeyboardEvent('keydown', {
            key: 'k',
            ctrlKey: true,
            bubbles: true,
            metaKey: true
        });
        document.dispatchEvent(event);
    }},
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm">
      <div className="glass-dark rounded-2xl p-2 shadow-2xl border border-white/10 flex items-center justify-around">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileTap={{ scale: 0.9 }}
            onClick={item.action}
            className="flex flex-col items-center gap-1 p-2 min-w-[64px]"
          >
            <item.icon size={20} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
