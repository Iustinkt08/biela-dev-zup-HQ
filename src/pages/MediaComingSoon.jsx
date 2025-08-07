import React, { useState } from 'react';

function MediaComingSoon() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-zup-dark text-white flex items-center justify-center p-6 pt-32">
      <div className="max-w-lg w-full text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          ZUP! Media is coming soon.
        </h1>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          But we're already working with bold brands. Get in touch below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="w-full px-6 py-4 bg-zup-gray border border-zup-gray-light rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zup-yellow focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Project topic or idea"
              className="w-full px-6 py-4 bg-zup-gray border border-zup-gray-light rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zup-yellow focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us what you need..."
              rows={5}
              className="w-full px-6 py-4 bg-zup-gray border border-zup-gray-light rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zup-yellow focus:border-transparent transition-all duration-300 resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-zup-yellow text-zup-dark py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            Send message
          </button>
        </form>
        
        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zup-gray-light">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://content-studio.biela.dev/i/content-studio/6890da6931b6031a62bd3ee3/1754403872175-6890da6931b6031a62bd3ee3/1754492555619.svg/logo-icon.webp" 
                alt="ZUP Icon" 
                className="h-8 w-8 opacity-60"
              />
            </div>
            <p className="text-gray-400 text-sm">© 2025 ZUP.DIGITAL - All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MediaComingSoon;
