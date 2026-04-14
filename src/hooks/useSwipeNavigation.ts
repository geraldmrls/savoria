import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useSwipeNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const touchStartX = useRef(0);
  const [direction, setDirection] = useState(0);

  const routes = ["/", "/menu", "/showcase"];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    const currentIndex = routes.indexOf(pathname);

    if (diff > 50 && currentIndex < routes.length - 1) {
      setDirection(1); // going right
      navigate(routes[currentIndex + 1]);
    } else if (diff < -50 && currentIndex > 0) {
      setDirection(-1); // going left
      navigate(routes[currentIndex - 1]);
    }
  };

  return { handleTouchStart, handleTouchEnd, direction };
}