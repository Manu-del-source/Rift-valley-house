import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-forest text-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:col-start-2"
          >
            <span className="uppercase tracking-widest text-xs text-brass mb-4 block font-medium">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-8 leading-tight">
              A Quiet Reverence for the Valley
            </h2>
            <div className="space-y-6 text-lg text-ivory/80 font-light leading-relaxed">
              <p>
                The Rift Valley House was established as a private sanctuary—a place where the grandeur of the Kenyan landscape meets understated, mindful architecture. We sought to create an environment where the boundaries between the natural world and modern comfort seamlessly dissolve.
              </p>
              <p>
                We believe that true luxury lies in space, stillness, and a genuine connection to one's surroundings. Every architectural choice, every meal prepared, and every interaction is guided by this quiet dedication to our guests and our environment.
              </p>
              <p>
                By integrating natural materials and traditional craftsmanship into every space, we honor the local heritage. Our small team is dedicated to offering a deeply personal hospitality experience, ensuring that every guest finds quiet restoration.
              </p>
            </div>
            <div className="mt-12">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" 
                alt="Architectural Details" 
                className="w-32 h-40 object-cover border-4 border-ivory/10 shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="aspect-[3/4] overflow-hidden bg-charcoal">
              <img 
                src="https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1200" 
                alt="Interior design and natural materials" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
