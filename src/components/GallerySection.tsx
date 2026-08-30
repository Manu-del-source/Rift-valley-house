import { motion } from 'motion/react';

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200', // Pool/Exterior
    alt: 'Lodge exterior and pool at sunset',
    className: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto'
  },
  {
    src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800', // Room interior
    alt: 'Luxury suite interior',
    className: 'md:col-span-1 md:row-span-1 aspect-square'
  },
  {
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800', // Wildlife/Landscape
    alt: 'Rift valley landscape and wildlife',
    className: 'md:col-span-1 md:row-span-1 aspect-square'
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200', // Dining
    alt: 'Fine dining experience',
    className: 'md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto'
  },
  {
    src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80&w=800', // Guest relaxing / view
    alt: 'Guest relaxing with scenic view',
    className: 'md:col-span-1 md:row-span-1 aspect-square'
  },
  {
    src: 'https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&q=80&w=800', // Architecture / Lodge details
    alt: 'Architectural details of the lodge',
    className: 'md:col-span-1 md:row-span-1 aspect-square'
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">Visual Journey</h2>
            <p className="text-lg text-charcoal/80 font-light leading-relaxed">
              Immerse yourself in the rhythm of our property. From the expansive vistas of the Rift Valley to the intimate, handcrafted details of our suites.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`overflow-hidden bg-sand group relative ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
