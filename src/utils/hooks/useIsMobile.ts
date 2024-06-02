import React, {useEffect, useState} from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      if (!window.matchMedia) return;
      setIsMobile(window.matchMedia("(pointer:coarse)").matches);
    }, []);

    return isMobile;
  }

  export default useIsMobile;