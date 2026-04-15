import { createContext, useContext, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const routes = ["/", "/menu", "/showcase"];

type SwipeContextType = {
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchEnd: (e: React.TouchEvent) => void;
  direction: number;
  navigateTo: (to: string) => void;
};

const SwipeContext = createContext<SwipeContextType | null>(null);

export function SwipeProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const touchStartX = useRef(0);
  const [direction, setDirection] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    const currentIndex = routes.indexOf(pathname);

    if (diff > 50 && currentIndex < routes.length - 1) {
      setDirection(1);
      navigate(routes[currentIndex + 1]);
    } else if (diff < -50 && currentIndex > 0) {
      setDirection(-1);
      navigate(routes[currentIndex - 1]);
    }
  };

  const navigateTo = (to: string) => {
    const currentIndex = routes.indexOf(pathname);
    const nextIndex = routes.indexOf(to);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    navigate(to);
  };

  return (
    <SwipeContext.Provider value={{ handleTouchStart, handleTouchEnd, direction, navigateTo }}>
      {children}
    </SwipeContext.Provider>
  );
}

export function useSwipeNavigation() {
  const context = useContext(SwipeContext);
  if (!context) throw new Error("useSwipeNavigation must be used within SwipeProvider");
  return context;
}