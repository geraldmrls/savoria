
import HomeIcon from "../../assets/home-icon.svg?react";
import MenuIcon from "../../assets/menu-icon.svg?react";
import ShowcaseIcon from "../../assets/showcase-icon.svg?react";

export function BottomNavBar() {
    return (
        <nav className="mt-10 flex justify-between px-8 py-6 bg-navbar-bg rounded-tr-2xl rounded-tl-2xl fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
            {/* home */}
            <button className="bg-light-purple-bg py-2 px-4 rounded-full flex flex-col items-center gap-1">
                <HomeIcon className="h-6 w-6 fill-white" />
                Home</button>

            {/* menu */}
            <button className="bg-light-purple-bg py-2 px-4 rounded-full flex flex-col items-center gap-1">
                <MenuIcon className="h-6 w-6 fill-white" />
                Menu</button>

            {/* showcase */}
            <button className="bg-light-purple-bg py-2 px-4 rounded-full flex flex-col items-center gap-1">
                <ShowcaseIcon className="h-6 w-6 fill-white" />
                Showcase</button>
        </nav>
    )
}