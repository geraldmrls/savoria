import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

// context
import { useSwipeNavigation } from "./components/SwipeContext/SwipeContext.tsx";

// components
import { PageWrapper } from "./components/PageWrapper/PageWrapper.tsx";
import { Header } from "./components/Header/Header.tsx";
import { BottomNavBar } from "./components/BottomNavBar/BottomNavBar.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Showcase } from "./pages/Showcase/Showcase.tsx";

import "./App.css";

function App() {
  const location = useLocation();
  const { handleTouchStart, handleTouchEnd, direction } = useSwipeNavigation();

  return (
    <div className="relative mb-30 mt-18 lg:mb-0 lg:mt-28">
      <Header />

      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/menu" element={<PageWrapper><Menu /></PageWrapper>} />
            <Route path="/showcase" element={<PageWrapper><Showcase /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>

      <BottomNavBar />
    </div>
  );
}

export default App;