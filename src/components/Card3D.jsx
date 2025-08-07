import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const Card3D = ({ description, logo, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
   if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
     <CardContainer className="inter-var">
      <CardBody className="bg-zup-gray relative group/card hover:shadow-2xl hover:shadow-zup-yellow/[0.1] border-zup-gray-light w-80 h-56 rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:border-zup-yellow/30">
        <div onClick={handleClick} className="h-full flex flex-col items-center justify-center">
          {logo && (
            <CardItem translateZ="60" className="mb-6">
              <img 
                src={logo} 
                alt="logo" 
                className="h-20 w-auto object-contain"
              />
            </CardItem>
          )}
          <CardItem
            as="p"
            translateZ="50"
            className="text-white text-lg font-medium leading-relaxed text-center"
          >
            {description}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
 );
};

export default Card3D;
