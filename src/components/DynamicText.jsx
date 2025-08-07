import React, { useState, useEffect } from 'react';

function DynamicText() {
  const words = [
    "platforms",
    "brands", 
    "experiences",
    "stories",
    "interfaces",
    "tools",
    "campaigns", 
    "products"
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 150);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="text-center animate-fade-in max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
        We build{' '}
        <span 
          className={`text-zup-yellow transition-opacity duration-150 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {words[currentWordIndex]}
        </span>
        <br />
        that matter.
      </h1>
    </div>
  );
}

export default DynamicText;
