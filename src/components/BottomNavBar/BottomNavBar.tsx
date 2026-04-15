import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

// utils
import { cn } from "../../utils/cn.ts";

import HomeIcon from "../../assets/home-icon.svg?react";
import MenuIcon from "../../assets/menu-icon.svg?react";
import ShowcaseIcon from "../../assets/star-icon.svg?react";

export function BottomNavBar() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Current path:", pathname);
  }, [pathname]);

  return (
    <nav className={cn(
      //mobile styles
      "mt-10 flex justify-between px-8 py-2 bg-navbar-bg rounded-tr-2xl rounded-tl-2xl fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]",

      //desktop styles - mine
      "lg:hidden xl:hidden 2xl:hidden"
    )}>

      <Link to="/">
        <button className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/" ? "bg-primary-bg" : ""} ${pathname === "/" ? "text-yellow-border" : "text-gray-500"}`}>
          <HomeIcon className={`h-6 w-6 ${pathname === "/" ? "fill-yellow-border" : "fill-gray-500"}`}/>
          Home
        </button>
      </Link>

      <Link to="/menu">
        <button className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/menu" ? "bg-primary-bg" : ""} ${pathname === "/menu" ? "text-yellow-border" : "text-gray-500"}`}>
          <MenuIcon className={`h-6 w-6 ${pathname === "/menu" ? "fill-yellow-border" : "fill-gray-500"}`}/>
          Menu
        </button>
      </Link>

      <Link to="/showcase">
        <button className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/showcase" ? "bg-primary-bg" : ""} ${pathname === "/showcase" ? "text-yellow-border" : "text-gray-500"}`}>
          <ShowcaseIcon className={`h-6 w-6 ${pathname === "/showcase" ? "stroke-yellow-border" : "stroke-gray-500"}`}/>
          Showcase
        </button>
      </Link>

    </nav>
  );
}