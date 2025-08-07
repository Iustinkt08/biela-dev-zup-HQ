import React from 'react';
import { useLocation } from 'react-router-dom';
import { FloatingNav } from './ui/floating-navbar';
import { IconHome, IconMessage, IconUser, IconCar } from '@tabler/icons-react';
function Navigation() {
  const location = useLocation();

   const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Dispatch",
      link: "/dispatch",
      icon: <IconCar className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Media",
      link: "/media",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/dispatch/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
     <>
      {/* Fixed Logo */}
      <div className="fixed top-6 left-6 z-[5001]">
        <a href="/">
          <img 
            src="https://content-studio.biela.dev/i/content-studio/6890da6931b6031a62bd3ee3/1754403872175-6890da6931b6031a62bd3ee3/1754492792650.png/logo_zup_yellow.webp" 
            alt="ZUP.DIGITAL" 
            className="h-8 w-auto"
          />
        </a>
      </div>
      
      {/* Floating Navigation */}
      <div className="relative w-full">
        <FloatingNav navItems={navItems} />
      </div>
    </>
  );
}

export default Navigation;