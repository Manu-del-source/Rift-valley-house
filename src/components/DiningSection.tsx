import { motion } from 'motion/react';

const diningFeatures = [
  {
    title: 'Breakfast',
    description: 'Begin your day with freshly baked pastries, tropical fruits from the valley, and world-renowned Kenyan coffee brewed to perfection.',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'The Restaurant',
    description: 'Farm-to-table seasonal dishes featuring locally sourced ingredients. Experience elegant multi-course dinners inspired by both local heritage and global culinary traditions.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'The Bar',
    description: 'Unwind with signature cocktails infused with wild herbs, a curated selection of premium spirits, and an extensive wine cellar.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Outdoor Dining',
    description: 'Alfresco dining experiences under the vast African stars, or a cozy evening gathered around our expansive fire pit.',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function DiningSection() {
  return (
    <section id="dining" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">Culinary Excellence</h2>
            <p className="text-lg text-charcoal/80 font-light leading-relaxed mb-8">
              Dining at The Rift Valley House is an event in itself. We believe in the power of food to connect us to the landscape. Our culinary team works closely with local farmers to bring the freshest, most vibrant flavors directly to your table.
            </p>
            <a href="#booking" className="border border-forest text-forest px-8 py-4 uppercase tracking-widest text-xs hover:bg-forest hover:text-ivory transition-colors inline-block">
              Reserve a Table
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden bg-sand">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1600" 
                alt="Culinary Excellence"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {diningFeatures.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-sand">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="font-serif text-2xl text-forest mb-3">{feature.title}</h3>
              <p className="text-charcoal/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
