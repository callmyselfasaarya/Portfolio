import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: 'Scaling Real-Time Apps to 10k+ Concurrent Users',
    excerpt: 'A deep dive into WebSockets, Redis pub/sub, and the architectural challenges of real-time systems.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    tags: ['Architecture', 'Scaling'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'The Future of Distributed Caching in Edge Networks',
    excerpt: 'Exploring how edge computing is changing the way we think about data consistency and latency.',
    date: 'February 28, 2024',
    readTime: '12 min read',
    tags: ['Edge Computing', 'Caching'],
    image: 'https://info.teledynamics.com/hubfs/blog-images/Edge%20computing%20-%20TeleDynamics%20Blog.jpg',
  },
  {
    title: 'Clean Architecture in Modern Frontend Frameworks',
    excerpt: 'Why separation of concerns still matters in the age of monolithic components and CSS-in-JS.',
    date: 'January 12, 2024',
    readTime: '6 min read',
    tags: ['React', 'Patterns'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Thought Leadership</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Writing about system design, scaling engineering teams, and modern web architectures.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
             <Button variant="outline" className="rounded-xl h-12 px-6">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
             </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                   <div className="flex items-center gap-1">
                     <Calendar size={12} />
                     {post.date}
                   </div>
                   <div className="flex items-center gap-1">
                     <Clock size={12} />
                     {post.readTime}
                   </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-2 py-1 bg-primary/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
