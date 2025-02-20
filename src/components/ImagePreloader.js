import { useEffect, useState } from 'react';

const ImagePreloader = ({ src, children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return isLoaded ? children : null;
};

export default ImagePreloader;