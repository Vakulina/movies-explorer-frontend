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
  console.log("aaaaaaaaa")
  return windowWidth;
}
/*export default function useResize() {
  const [windowWidth, setWindowWidth] = useState(getWindth());


      const newWindth = useMemo(()=>{
        let timeoutId = null;

        const resizeListener = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() =>{ return getWindth()}, 150);
        };
        window.addEventListener('resize', resizeListener);
        return () => {
          window.removeEventListener('resize', resizeListener);
        }
      })
    
      useEffect(()=>{
        setWindowWidth(newWindth)
      },[newWindth, setWindowWidth])


  return windowWidth;
}*/