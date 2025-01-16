import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Scrolling to top on path:", pathname); // Debug log
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;
