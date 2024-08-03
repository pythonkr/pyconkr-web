import { useCallback, useEffect, useState } from "react"

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => setTargetReached(e.matches ? true : false), []);
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);
    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);
    return () => media.removeEventListener('change', updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

const useIsMobile = () => useMediaQuery(809);

export default useIsMobile;
