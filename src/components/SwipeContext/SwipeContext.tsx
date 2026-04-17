import { createContext, useContext, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const routes = ["/", "/menu", "/showcase"];

type SwipeContextType = {
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchEnd: (e: React.TouchEvent) => void;
  direction: number;
  navigateTo: (to: string) => void;
  setSwipeDisabled: (disabled: boolean) => void;
};

const SwipeContext = createContext<SwipeContextType | null>(null);

export function SwipeProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const [direction, setDirection] = useState(0);
  const [swipeDisabled, setSwipeDisabled] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === 0 || swipeDisabled) return;

    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    touchStartX.current = 0;
    touchStartY.current = 0;

    if (Math.abs(diffX) < Math.abs(diffY)) return;
    if (Math.abs(diffX) < 80) return;

    const currentIndex = routes.indexOf(pathname);

    if (diffX > 80 && currentIndex < routes.length - 1) {
      setDirection(1);
      navigate(routes[currentIndex + 1]);
    } else if (diffX < -80 && currentIndex > 0) {
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
    <SwipeContext.Provider
      value={{ handleTouchStart, handleTouchEnd, direction, navigateTo, setSwipeDisabled }}
    >
      {children}
    </SwipeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSwipeNavigation() {
  const context = useContext(SwipeContext);
  if (!context)
    throw new Error("useSwipeNavigation must be used within SwipeProvider");
  return context;
}