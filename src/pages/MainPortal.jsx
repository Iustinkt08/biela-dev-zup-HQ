import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import DynamicTyping from '../components/DynamicTyping';
import Card3D from '../components/Card3D';

function MainPortal() {
  return (
    <div className="min-h-screen bg-zup-dark text-white overflow-hidden relative pt-20">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
         <DynamicTyping />
       
        <div className="flex flex-col lg:flex-row gap-12 mt-20 animate-slide-up">
           <Card3D
            description="Marketing that converts. For brands that matter."
            logo="https://content-studio.biela.dev/i/content-studio/6890da6931b6031a62bd3ee3/1754403872175-6890da6931b6031a62bd3ee3/1754492675783.png/logo_zup_media_white.webp"
           navigateTo="/media"
          />
           <Card3D
            description="One app. All taxis. Across Romania."
            logo="https://content-studio.biela.dev/i/content-studio/6890da6931b6031a62bd3ee3/1754403872175-6890da6931b6031a62bd3ee3/1754492675488.png/logo_zup_dispatch_white.webp"
           navigateTo="/dispatch"
          />
        </div>
         
        {/* Footer */}
        <footer className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-6 text-center">
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

export default MainPortal;