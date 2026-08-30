import { motion } from 'motion/react';

const experiences = [
  {
    title: 'Nature Walks',
    image: 'https://images.unsplash.com/photo-1523805009345-744884589954?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Local Sightseeing',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Scenic Relaxation',
    image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cultural Experiences',
    image: 'https://images.unsplash.com/photo-1547471080-7fc2caa6f57f?auto=format&fit=crop&q=80&w=800'
  }
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">Discover the Valley</h2>
            <p className="text-lg text-charcoal/80 font-light leading-relaxed">
              Whether you seek thrilling exploration or profound stillness, our curated experiences allow you to engage with the landscape on your own terms.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-forest"
            >
              <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent pointer-events-none" />
              <h3 className="absolute bottom-6 left-6 text-ivory font-serif text-xl z-10">{exp.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
