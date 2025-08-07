import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FlipCard({ front, back, rotateDirection = 'right', navigateTo }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div 
      className="relative w-80 h-56 perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleClick}
    >
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped 
            ? rotateDirection === 'right' ? 'rotate-y-180' : '-rotate-y-180'
            : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full bg-zup-gray border border-zup-gray-light rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:border-zup-yellow/30"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-zup-yellow mb-3">ZUP!</div>
            <div className="text-xl text-white font-medium">{front}</div>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full bg-white rounded-2xl flex items-center justify-center p-8"
          style={{
            backfaceVisibility: 'hidden',
            transform: rotateDirection === 'right' ? 'rotateY(180deg)' : 'rotateY(-180deg)',
          }}
        >
          <p className="text-zup-dark text-lg font-medium text-center leading-relaxed">
            {back}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
