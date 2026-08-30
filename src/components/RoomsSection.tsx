import { motion } from 'motion/react';
import { Users, BedDouble, Wind } from 'lucide-react';

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200',
    description: 'An elegantly appointed space offering panoramic views of the surrounding valley, designed with natural materials and local artistry.',
    guests: 2,
    bed: 'King Bed',
    price: '45,000',
    amenities: ['En-suite bathroom', 'Private balcony', 'Air conditioning']
  },
  {
    id: 'garden',
    name: 'Garden Suite',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200',
    description: 'A spacious suite opening directly into our lush private gardens, featuring an extended living area and outdoor shower.',
    guests: 3,
    bed: 'King + Daybed',
    price: '65,000',
    amenities: ['Private garden access', 'Outdoor shower', 'Lounge area']
  },
  {
    id: 'family',
    name: 'Family Suite',
    image: 'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?auto=format&fit=crop&q=80&w=1200',
    description: 'Perfect for families or groups, offering two connecting rooms with generous shared living spaces and multiple vantage points.',
    guests: 4,
    bed: 'Two King Beds',
    price: '95,000',
    amenities: ['Connecting rooms', 'Dual bathrooms', 'Large terrace']
  },
  {
    id: 'premium',
    name: 'Premium Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89af14fbfee?auto=format&fit=crop&q=80&w=1200',
    description: 'Our most luxurious offering. A sprawling suite featuring a private plunge pool, panoramic glass walls, and dedicated personalized service.',
    guests: 2,
    bed: 'Four-poster King',
    price: '120,000',
    amenities: ['Private plunge pool', 'Premium amenities', 'Panoramic views']
  }
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">Rooms & Suites</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-lg font-light">
            Each space is thoughtfully crafted to frame the extraordinary landscape, 
            blending refined comfort with the raw beauty of the Rift Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-sand">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-baseline mb-4 gap-2">
                <h3 className="font-serif text-2xl md:text-3xl text-forest">{room.name}</h3>
                <span className="text-brass font-medium text-lg">{room.price} KES <span className="text-charcoal/50 text-sm font-light">/ night</span></span>
              </div>
              <p className="text-charcoal/80 font-light leading-relaxed mb-6 flex-grow">
                {room.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-charcoal/70 mb-8 pb-8 border-b border-charcoal/10">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-brass" />
                  <span>Up to {room.guests} Guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <BedDouble size={16} className="text-brass" />
                  <span>{room.bed}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind size={16} className="text-brass" />
                  <span>{room.amenities[0]}</span>
                </div>
              </div>
              
              <a href="#booking" className="inline-block text-forest uppercase tracking-widest text-xs font-medium hover:text-brass transition-colors w-fit">
                View Room & Book &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
