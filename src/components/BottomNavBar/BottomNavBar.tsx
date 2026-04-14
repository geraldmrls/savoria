import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HomeIcon from "../../assets/home-icon.svg?react";
import MenuIcon from "../../assets/menu-icon.svg?react";
import ShowcaseIcon from "../../assets/showcase-icon.svg?react";

export function BottomNavBar() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Current path:", pathname);
  }, [pathname]);

  return (
    <nav className="mt-10 flex justify-between px-8 py-5 bg-navbar-bg rounded-tr-2xl rounded-tl-2xl fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">

      <Link to="/">
        <button className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/" ? "bg-light-purple-bg" : ""}`}>
          <HomeIcon className={`h-6 w-6 ${pathname === "/" ? "fill-button-purple-bg" : "fill-gray-500"}`}/>
          Home
        </button>
      </Link>

      <Link to="/menu">
        <button className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/menu" ? "bg-light-purple-bg" : ""}`}>
          <MenuIcon className={`h-6 w-6 ${pathname === "/menu" ? "fill-button-purple-bg" : "fill-gray-500"}`}/>
          Menu
        </button>
      </Link>

      <Link to="/showcase">
        <button className={`py-2 px-5 rounded-full flex flex-col items-center gap-1 ${pathname === "/showcase" ? "bg-light-purple-bg" : ""}`}>
          <ShowcaseIcon className={`h-6 w-6 ${pathname === "/showcase" ? "stroke-button-purple-bg" : "stroke-gray-500"}`}/>
          Showcase
        </button>
      </Link>

    </nav>
  );
}