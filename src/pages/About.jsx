import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zup-dark to-zup-gray text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About ZUP! Dispatch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Modernizing Romania's taxi infrastructure with transparent, tech-first, legally compliant solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Mission & Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to revolutionize Romania's transportation sector by creating a seamless, 
                transparent platform that connects passengers with licensed taxi operators nationwide.
              </p>
              <p className="text-lg text-gray-700">
                We envision a future where every Romanian city has access to reliable, fair-priced 
                taxi services through innovative technology that respects both drivers and passengers.
              </p>
            </div>
            <div className="bg-zup-yellow p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Built to modernize</h3>
              <p className="text-black">
                Romania's taxi infrastructure through transparent, tech-first, and legally compliant solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://content-studio.biela.dev/i/content-studio/6890da6931b6031a62bd3ee3/1754403872175-6890da6931b6031a62bd3ee3/1754492555619.svg/logo-icon.webp" 
              alt="ZUP Icon" 
              className="h-8 w-8 opacity-60"
            />
          </div>
          <p className="text-gray-500 text-sm">© 2025 ZUP.DIGITAL - All rights reserved</p>
        </div>
      </footer>

      {/* Founders & Evolution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Founders & Evolution</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-zup-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">From Piatra Neamț</h3>
                <p className="text-gray-600">Started as a local pilot project</p>
              </div>
              <div className="text-center">
                <div className="bg-zup-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Scaling Nationwide</h3>
                <p className="text-gray-600">Expanding across Romania</p>
              </div>
              <div className="text-center">
                <div className="bg-zup-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">100+ Drivers</h3>
                <p className="text-gray-600">Growing network of partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-zup-yellow rounded-lg p-6">
              <h3 className="text-2xl font-bold text-zup-yellow mb-3">CONAF Award</h3>
              <p className="text-gray-700">2nd place at CONAF National Business Competition</p>
            </div>
            <div className="bg-white border-2 border-zup-yellow rounded-lg p-6">
              <h3 className="text-2xl font-bold text-zup-yellow mb-3">Arena Urşilor</h3>
              <p className="text-gray-700">3rd place at Arena Urşilor Pre‑Accelerator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-zup-dark text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-zup-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zup-yellow">Safety</h3>
              <p className="text-gray-300">Ensuring secure rides for all passengers</p>
            </div>
            <div className="text-center">
              <div className="bg-zup-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zup-yellow">Transparency</h3>
              <p className="text-gray-300">Clear pricing and honest communication</p>
            </div>
            <div className="text-center">
              <div className="bg-zup-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zup-yellow">Inclusivity</h3>
              <p className="text-gray-300">Accessible transportation for everyone</p>
            </div>
            <div className="text-center">
              <div className="bg-zup-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zup-yellow">Innovation</h3>
              <p className="text-gray-300">Leading with cutting-edge technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Credibility */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Team Credibility</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Our team combines expertise in UI/UX design, marketing through ZUP! Media, 
              and business scalability to deliver exceptional transportation solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-zup-yellow">UI/UX Expertise</h3>
                <p className="text-gray-600">Co-founders with deep design experience</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-zup-yellow">Marketing Prowess</h3>
                <p className="text-gray-600">Powered by ZUP! Media's proven strategies</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-zup-yellow">Business Scalability</h3>
                <p className="text-gray-600">Proven track record of growth and expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://content-studio.biela.dev/i/content-studio/6890da6931b6031a62bd3ee3/1754403872175-6890da6931a62bd3ee3/1754492555619.svg/logo-icon.webp" 
              alt="ZUP Icon" 
              className="h-8 w-8 opacity-60"
            />
          </div>
          <p className="text-gray-500 text-sm">© 2025 ZUP.DIGITAL - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
