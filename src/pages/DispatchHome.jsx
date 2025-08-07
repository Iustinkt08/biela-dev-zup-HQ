import React, { useState } from 'react';

function DispatchHome() {
  const [email, setEmail] = useState('');

  const features = [
    {
      title: "ZUP!",
      description: "Standard ride from nearest taxi station"
    },
    {
      title: "ZIP!",
      description: "Premium comfort ride in cars made after 2017"
    },
    {
      title: "ZAP!",
      description: "Fast pickup from your current location"
    },
    {
      title: "ZUP! NOW",
      description: "Instant booking by tapping a vehicle on the map"
    }
  ];

  const achievements = [
    "2nd place at CONAF National Business Competition",
    "3rd place at Arena Urşilor Pre‑Accelerator"
  ];

  const supportedCities = [
    { name: "Piatra Neamț", status: "Live" },
    { name: "Iași", status: "Coming Soon" },
    { name: "Cluj", status: "Coming Soon" },
    { name: "Brașov", status: "Coming Soon" },
    { name: "Bucharest", status: "Coming Soon" }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for signing up! We'll keep you updated.");
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="bg-zup-dark text-white py-24">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Romania's first national taxi dispatch app
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
            Real licensed taxis. Transparent pricing. Instant booking.
          </p>
          <button className="bg-zup-yellow text-zup-dark px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
      </section>

      {/* Why Choose ZUP! Dispatch */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-zup-dark">Why Choose ZUP! Dispatch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-zup-yellow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zup-dark">Nationwide Coverage</h3>
              <p className="text-gray-600 leading-relaxed">Access to licensed taxis across Romania</p>
            </div>
            <div className="text-center">
              <div className="bg-zup-yellow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zup-dark">Instant Booking</h3>
              <p className="text-gray-600 leading-relaxed">Book your ride instantly via mobile app</p>
            </div>
            <div className="text-center">
              <div className="bg-zup-yellow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zup-dark">Fair Fares</h3>
              <p className="text-gray-600 leading-relaxed">Official taximeter pricing, no surge</p>
            </div>
            <div className="text-center">
              <div className="bg-zup-yellow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zup-dark">Fleet Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Management tools for operators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Ride Options */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-zup-dark">Smart Ride Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-zup-yellow hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-zup-yellow mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Validation */}
      <section className="py-20 bg-zup-dark text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Real‑World Validation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-zup-gray p-8 rounded-2xl">
                <p className="text-lg font-semibold text-zup-yellow leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Cities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-zup-dark">Supported Cities</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {supportedCities.map((city, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                  city.status === 'Live' ? 'bg-green-500' : 'bg-zup-yellow'
                }`}>
                  <span className="text-white font-bold text-xl">
                    {city.status === 'Live' ? '✓' : '⏳'}
                  </span>
                </div>
                <h3 className="font-semibold text-zup-dark mb-1">{city.name}</h3>
                <p className="text-sm text-gray-600">{city.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-zup-yellow">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zup-dark">Stay Updated</h2>
          <p className="text-zup-dark mb-8 text-lg">Receive bonuses when we launch in your city!</p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-zup-dark text-zup-dark"
              required
            />
            <button
              type="submit"
              className="bg-zup-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zup-dark text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-zup-yellow">ZUP! DISPATCH</div>
            </div>
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="/dispatch/terms" className="hover:text-zup-yellow transition-colors">Terms</a>
              <a href="/dispatch/privacy" className="hover:text-zup-yellow transition-colors">Privacy</a>
              <a href="/dispatch/about" className="hover:text-zup-yellow transition-colors">About</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-zup-yellow transition-colors">Facebook</a>
              <a href="#" className="hover:text-zup-yellow transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-zup-yellow transition-colors">Instagram</a>
            </div>
          </div>
          <div className="border-t border-zup-gray pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <img 
                  src="https://content-studio.biela.dev/i/content-studio/6890da6931b6031a62bd3ee3/1754403872175-6890da6931b6031a62bd3ee3/1754492555619.svg/logo-icon.webp" 
                  alt="ZUP Icon" 
                  className="h-6 w-6"
                />
                <p>© 2025 ZUP! All rights reserved.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span>AI vibe coded development by </span>
                <a 
                  href="https://biela.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zup-yellow hover:text-yellow-400 transition-colors"
                >
                  Biela.dev
                </a>
                <span>, powered by </span>
                <a 
                  href="https://teachmecode.ae/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zup-yellow hover:text-yellow-400 transition-colors"
                >
                  TeachMeCode® Institute
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DispatchHome;
