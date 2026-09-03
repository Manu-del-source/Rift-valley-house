import { useState, type FormEvent } from 'react';

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-sand">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-ivory p-8 md:p-16 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">Request Availability</h2>
            <p className="text-charcoal/70 font-light max-w-xl mx-auto">
              Submit your preferred dates and our concierge will personally confirm availability and assist with your arrangements.
            </p>
          </div>

          {submitted ? (
             <div className="text-center py-12">
               <h3 className="font-serif text-2xl text-forest mb-4">Request Received</h3>
               <p className="text-charcoal/70 font-light">
                 Thank you for your interest. Our team will contact you shortly to confirm your dates.
               </p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block uppercase tracking-widest text-xs text-charcoal/80">Check In</label>
                  <input type="date" required className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-forest transition-colors text-charcoal font-light" />
                </div>
                <div className="space-y-2">
                  <label className="block uppercase tracking-widest text-xs text-charcoal/80">Check Out</label>
                  <input type="date" required className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-forest transition-colors text-charcoal font-light" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block uppercase tracking-widest text-xs text-charcoal/80">Guests</label>
                  <select className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-forest transition-colors text-charcoal appearance-none rounded-none font-light">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block uppercase tracking-widest text-xs text-charcoal/80">Room Preference</label>
                  <select className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-forest transition-colors text-charcoal appearance-none rounded-none font-light">
                    <option>Any Available</option>
                    <option>Deluxe Room</option>
                    <option>Garden Suite</option>
                    <option>Family Suite</option>
                    <option>Premium Suite</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block uppercase tracking-widest text-xs text-charcoal/80">Special Requests</label>
                <textarea rows={3} className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-forest transition-colors text-charcoal resize-none font-light"></textarea>
              </div>

              <div className="pt-8 text-center">
                <button type="submit" className="bg-forest text-ivory px-12 py-4 uppercase tracking-widest text-xs hover:bg-forest/90 transition-colors w-full md:w-auto">
                  Submit Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
