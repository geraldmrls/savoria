import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// utils
import { cn } from "../../utils/cn.ts";

// context
import { useSwipeNavigation } from "../SwipeContext/SwipeContext.tsx";

import HomeIcon from "../../assets/home-icon.svg?react";
import MenuIcon from "../../assets/menu-icon.svg?react";
import ShowcaseIcon from "../../assets/star-icon.svg?react";

export function BottomNavBar() {
  const { pathname } = useLocation();
  const { navigateTo } = useSwipeNavigation();

  useEffect(() => {
    console.log("Current path:", pathname);
  }, [pathname]);

  return (
    <nav className={cn(
      // mobile styles
      "flex justify-between px-8 py-1 bg-navbar-bg rounded-tr-2xl rounded-tl-2xl fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]",

      // desktop styles
      "lg:hidden"
    )}>

      <button
        onClick={() => navigateTo("/")}
        className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/" ? "bg-primary-bg" : ""} ${pathname === "/" ? "text-yellow-border" : "text-gray-500"} text-sm`}
      >
        <HomeIcon className={`h-5 w-5 ${pathname === "/" ? "fill-yellow-border" : "fill-gray-500"}`}/>
        Home
      </button>

      <button
        onClick={() => navigateTo("/menu")}
        className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/menu" ? "bg-primary-bg" : ""} ${pathname === "/menu" ? "text-yellow-border" : "text-gray-500"} text-sm`}
      >
        <MenuIcon className={`h-5 w-5 ${pathname === "/menu" ? "fill-yellow-border" : "fill-gray-500"}`}/>
        Menu
      </button>

      <button
        onClick={() => navigateTo("/showcase")}
        className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/showcase" ? "bg-primary-bg" : ""} ${pathname === "/showcase" ? "text-yellow-border" : "text-gray-500"} text-sm`}
      >
        <ShowcaseIcon className={`h-5 w-5 ${pathname === "/showcase" ? "stroke-yellow-border" : "stroke-gray-500"}`}/>
        Showcase
      </button>

    </nav>
  );
}