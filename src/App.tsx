import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

// hooks
import { useSwipeNavigation } from "./hooks/useSwipeNavigation.ts";

// components
import { PageWrapper } from "./components/PageWrapper/PageWrapper.tsx";
import { Header } from "./components/Header/Header.tsx";
import { BottomNavBar } from "./components/BottomNavBar/BottomNavBar.tsx";

import "./App.css";
import { Home } from "./pages/Home/Home.tsx";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Showcase } from "./pages/Showcase/Showcase.tsx";

function App() {
  const location = useLocation();
  const { handleTouchStart, handleTouchEnd, direction } = useSwipeNavigation();

  return (
    <div className="relative">
      <Header />

      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper direction={direction}><Home /></PageWrapper>} />
            <Route path="/menu" element={<PageWrapper direction={direction}><Menu /></PageWrapper>} />
            <Route path="/showcase" element={<PageWrapper direction={direction}><Showcase /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>

      <BottomNavBar />
    </div>
  );
}

export default App;