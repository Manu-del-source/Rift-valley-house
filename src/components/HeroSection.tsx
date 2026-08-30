import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <>
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <img 
          src="https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&q=80&w=2800" 
          alt="The Rift Valley House Lodge" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-20"
        >
          <h1 className="text-ivory font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
            Stay Somewhere<br/>Worth Remembering.
          </h1>
          <p className="text-ivory/90 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed">
            A peaceful boutique retreat surrounded by the beauty of Kenya's Rift Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <a href="#rooms" className="bg-brass text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-brass/90 transition-colors">
              Explore Rooms
            </a>
            <a href="#booking" className="border border-ivory text-ivory px-8 py-4 uppercase tracking-widest text-xs hover:bg-ivory hover:text-forest transition-colors">
              Check Availability
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-forest">A Sanctuary of Comfort and Quiet</h2>
          <p className="text-lg md:text-xl leading-relaxed text-charcoal/80 font-light">
            Nestled in the breathtaking landscapes of the Rift Valley, our boutique retreat offers an unparalleled blend of warm Kenyan hospitality, elegant modern architecture, and a deep connection to nature. From immersive dining experiences to tranquil surroundings, every detail is considered for your ultimate rest and rejuvenation.
          </p>
        </motion.div>
      </section>
    </>
  );
}
