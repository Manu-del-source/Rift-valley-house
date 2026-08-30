import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Location */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-ivory mb-6">The Rift Valley House</h3>
            <div className="space-y-4 font-light text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brass" />
                <span>The Rift Valley<br/>Kenya</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brass" />
                <span>+254 700 000 000</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brass" />
                <span>reservations@riftvalleyhouse.com</span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1 lg:ml-auto">
            <h4 className="uppercase tracking-widest text-xs text-ivory mb-6 font-medium">Explore</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><a href="#rooms" className="hover:text-brass transition-colors">Rooms & Suites</a></li>
              <li><a href="#dining" className="hover:text-brass transition-colors">Dining</a></li>
              <li><a href="#experiences" className="hover:text-brass transition-colors">Experiences</a></li>
              <li><a href="#gallery" className="hover:text-brass transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-brass transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h4 className="uppercase tracking-widest text-xs text-ivory mb-6 font-medium">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="hover:text-brass transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brass transition-colors"><Facebook size={20} /></a>
            </div>
            <p className="font-light text-sm">
              Available on WhatsApp<br/>
              <span className="text-brass">+254 700 000 000</span>
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="uppercase tracking-widest text-xs text-ivory mb-6 font-medium">Newsletter</h4>
            <p className="font-light text-sm mb-4">
              Subscribe to receive news from the valley and exclusive offers.
            </p>
            <form className="flex border-b border-ivory/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none w-full text-sm placeholder:text-ivory/50 font-light"
              />
              <button type="submit" className="uppercase tracking-widest text-xs hover:text-brass transition-colors font-medium">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Policies */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-ivory/50">
          <p>&copy; {new Date().getFullYear()} The Rift Valley House. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
