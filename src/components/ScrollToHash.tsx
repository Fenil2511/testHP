import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Create a recursive polling function to wait for dynamic content (like MasonryGallery) to render and calculate heights
      const tryScroll = (attempts = 0) => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          // Add a small delay to ensure CSS calculations are done before scrolling
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        } else if (attempts < 8) {
          // Retry every 250ms for up to 2 seconds if element isn't in DOM yet
          setTimeout(() => tryScroll(attempts + 1), 250);
        }
      };
      
      tryScroll();
    } else {
      // If no hash, scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
