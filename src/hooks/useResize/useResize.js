import { useState, useEffect } from 'react';
const getWindth = () => document.documentElement.scrollWidth;

export default function useResize() {
  const [windowWidth, setWindowWidth] = useState(getWindth());
  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowWidth(getWindth()), 150);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])
  return windowWidth;
}
