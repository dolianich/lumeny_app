import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollBehavior = 'auto' | 'smooth';

const useScrollToTop = (): ((behavior?: ScrollBehavior) => void) => {
  const { pathname } = useLocation();

  const scrollToTop = useCallback((behavior: ScrollBehavior = 'auto') => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior
    });
  }, []);

  useEffect(() => {
    scrollToTop('auto');
  }, [pathname, scrollToTop]);

  return scrollToTop;
};

export default useScrollToTop;