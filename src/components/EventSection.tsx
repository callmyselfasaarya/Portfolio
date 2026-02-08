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
        <section id="events" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">Events</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Participate in our upcoming events and workshops.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 justify-center">
                    {/* Added check for single item centering if needed, but grid is fine */}
                    {events.map((event, index) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`group glass rounded-xl overflow-hidden transition-all duration-300 ${isMobile ? 'hover:scale-102' : 'hover:scale-105'
                                }`}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{event.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">{event.description}</p>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                    {event.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2 justify-center">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center justify-center gap-2 text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation min-h-[44px]"
                                        onClick={() => window.open(event.link, '_blank')}
                                    >
                                        <Calendar size={16} />
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventSection;
