import React, { useState, useEffect } from 'react';

function DynamicTyping() {
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
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      if (charIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [currentWordIndex, charIndex, isTyping, words]);

  return (
    <div className="text-center animate-fade-in max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
        We build{' '}
        <span className="text-zup-yellow">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
        <br />
        that matter.
      </h1>
    </div>
  );
}

export default DynamicTyping;
