import React from 'react';

const CardImage = ({ src, alt }) => {
  return (
    <img 
      loading="lazy" 
      src={src} 
      alt={alt}
      className="object-contain mt-3 w-full rounded-sm aspect-[1.77]" 
    />
  );
};

export default CardImage;