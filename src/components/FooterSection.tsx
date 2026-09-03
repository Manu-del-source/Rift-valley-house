import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function FooterSection() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

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
                <span>Lake Naivasha<br/>Kenya</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brass" />
                <a href="tel:+254712345678" className="hover:text-brass transition-colors">+254 712 345 678</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brass" />
                <a href="mailto:reservations@riftvalleyhouse.com" className="hover:text-brass transition-colors">reservations@riftvalleyhouse.com</a>
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

          {/* Connect */}
          <div className="lg:col-span-1">
            <h4 className="uppercase tracking-widest text-xs text-ivory mb-6 font-medium">Connect</h4>
            <p className="font-light text-sm mb-4">
              Questions or special requests? Our team is one message away on WhatsApp.
            </p>
            <a
              href="https://wa.me/254712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-brass hover:text-ivory transition-colors font-light text-sm"
            >
              <MessageCircle size={18} />
              <span>+254 712 345 678</span>
            </a>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="uppercase tracking-widest text-xs text-ivory mb-6 font-medium">Newsletter</h4>
            {subscribed ? (
              <p className="font-light text-sm text-brass">
                Thank you for subscribing — welcome to the valley.
              </p>
            ) : (
              <>
                <p className="font-light text-sm mb-4">
                  Subscribe to receive news from the valley and exclusive offers.
                </p>
                <form onSubmit={handleSubscribe} className="flex border-b border-ivory/30 pb-2">
                  <input 
                    type="email"
                    required
                    placeholder="Email Address" 
                    className="bg-transparent border-none outline-none w-full text-sm placeholder:text-ivory/50 font-light"
                  />
                  <button type="submit" className="uppercase tracking-widest text-xs hover:text-brass transition-colors font-medium shrink-0">
                    Subscribe
                  </button>
                </form>
              </>
            )}
          </div>

        </div>

        {/* Footer bottom */}
        <div className="border-t border-ivory/10 pt-8 text-center text-xs font-light text-ivory/50">
          <p>&copy; {new Date().getFullYear()} The Rift Valley House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
