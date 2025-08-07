import React from 'react';

function Terms() {
  return (
    <div className="min-h-screen bg-white py-16 pt-40">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Service Overview</h2>
            <p>
              ZUP! Dispatch provides a platform connecting passengers with licensed taxi operators 
              across Romania. By using our service, you agree to these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information when booking rides</li>
              <li>Treat drivers and vehicles with respect</li>
              <li>Pay all fares as displayed in the application</li>
              <li>Report any issues promptly through our support channels</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Ride Conditions</h2>
            <p>
              All rides are provided by licensed taxi operators. Fares are calculated based on 
              official taximeter rates. Service availability may vary by location and time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Payment Terms</h2>
            <p>
              Payment is due upon completion of the ride. We accept various payment methods 
              including cash, card, Apple Pay, and Google Pay. Refunds are processed according 
              to our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Refund Policy</h2>
            <p>
              Refunds may be issued in cases of service failure, overcharging, or other 
              legitimate complaints. Refund requests must be submitted within 24 hours of 
              the ride completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Limitation of Liability</h2>
            <p>
              ZUP! Dispatch acts as a platform connecting users with taxi operators. We are 
              not liable for actions of taxi operators or other users beyond our direct control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Users will be notified 
              of significant changes through the application or email.
            </p>
          </section>
        </div>
        
        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
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
      </div>
    </div>
  );
}

export default Terms;
