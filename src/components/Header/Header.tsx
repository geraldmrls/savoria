import { NavLink } from "react-router-dom";

// utils
import { cn } from "../../utils/cn.ts";

import "./Header.css";

export function Header() {
  return (
    <header
      className={cn(
        // mobile styles
        "bg-primary-bg/95 py-4 px-4 sm:px-5 text-center shadow-md fixed w-full top-0 left-0 z-50 backdrop-blur-sm flex justify-center",

        // desktop styles
        "lg:py-9 lg:px-45 lg:text-left flex lg:items-center lg:justify-between header-fonts",
      )}
    >
      <NavLink to="/">
        <h1
          className={cn(
            // mobile styles
            "text-xl font-semibold",

            // desktop styles - mine
            "lg:text-brown-bg-dark lg:text-4xl lg:font-normal",
          )}
        >
          Savoria
        </h1>
      </NavLink>

      {/* navigation links - desktop only */}
      <div
        className={cn(
          // mobile styles
          "hidden",

          // desktop styles - mine
          "lg:flex lg:gap-8 lg:items-center lg:select-none",
        )}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "text-base hover:text-yellow-border cursor-pointer",
              isActive &&
                "underline decoration-brown-bg decoration-2 underline-offset-4 text-brown-bg",
            )
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            cn(
              "text-base hover:text-yellow-border cursor-pointer ",
              isActive &&
                "underline decoration-brown-bg decoration-2 underline-offset-4 text-brown-bg",
            )
          }
        >
          MENU
        </NavLink>

        <NavLink
          to="/showcase"
          className={({ isActive }) =>
            cn(
              "text-base hover:text-yellow-border cursor-pointer",
              isActive &&
                "underline decoration-brown-bg decoration-2 underline-offset-4 text-brown-bg",
            )
          }
        >
          SHOWCASE
        </NavLink>
      </div>
    </header>
  );
}
