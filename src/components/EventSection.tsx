import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const EventSection: React.FC = () => {
    const isMobile = useIsMobile();
    const events = [
        {
            title: 'JUST PROMPT IT',
            description: 'An exciting event focused on the art and science of prompting.',
            image: '/images/ClassConnect.png', // Using existing image as placeholder
            tags: ['AI', 'Workshop', 'Prompt Engineering'],
            link: '#',
        },
    ];

    return (
    <div id="events" className="container-standard">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-24"
        >
            <h2 className="mb-6">Events</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Participate in our upcoming events and workshops.
            </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-center">
            {events.map((event, index) => (
                <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group glass-card rounded-2xl overflow-hidden"
                >
                    <div className="relative aspect-video overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-8">
                        <h3 className="mb-4">{event.title}</h3>
                        <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">{event.description}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {event.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <Button
                                variant="outline"
                                className="w-full border-white/10 hover:bg-white/5 font-bold py-6 rounded-xl transition-all"
                                onClick={() => window.open(event.link, '_blank')}
                            >
                                <Calendar className="mr-3" size={18} />
                                View Details
                            </Button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>

    );
};

export default EventSection;
