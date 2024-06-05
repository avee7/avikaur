// src/hooks/useScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "@reach/router";

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default useScrollToTop;
