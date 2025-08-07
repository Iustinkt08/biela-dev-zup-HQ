import React from 'react';

function Privacy() {
  return (
    <div className="min-h-screen bg-white py-16 pt-40">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Phone number and email address for account creation</li>
              <li>Ride routes and location data for service provision</li>
              <li>Payment information for transaction processing</li>
              <li>Usage analytics to improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ride scheduling and route optimization</li>
              <li>Billing and payment processing</li>
              <li>Service analytics and improvement</li>
              <li>Customer support and communication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Legal Compliance</h2>
            <p>
              We comply with all applicable Romanian and EU regulations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>ANAF taxation integration for all transactions</li>
              <li>GDPR compliance for data protection</li>
              <li>Local transportation authority requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary for the purposes outlined 
              in this policy. Ride history is kept for 3 years for taxation compliance. 
              You may request data deletion at any time, subject to legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Third-Party Integrations</h2>
            <p>
              We share data with third-party services only as necessary for service operation:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Map services for navigation and route planning</li>
              <li>Analytics services for service improvement</li>
              <li>Payment gateways for secure transactions</li>
              <li>Communication services for notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Your Rights</h2>
            <p>
              Under GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request data deletion</li>
              <li>Data portability</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Contact Us</h2>
            <p>
              If you have questions about this privacy policy or your data, please contact 
              us at privacy@zup.digital or through our customer support channels.
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

export default Privacy;
