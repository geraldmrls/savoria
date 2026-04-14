import "./Home.css";

import { Header } from "../../components/Header/Header";
import bgHome from "../../assets/viejo-te.jpg";

export function Home() {
  return (
    <>
      <Header />
      <div
        style={{ backgroundImage: `url(${bgHome})` }}
        className="relative bg-cover bg-center h-100 mt-4 before:bg-black/50 before:absolute before:inset-0"
      >
        {/* content on image */}
        <div className="relative py-6 flex flex-col items-center gap-4">
            <h4 className="text-white text-center">An Experience Worth Savoring</h4>
            
            {/* line */}
            <div className="border-t border-y-amber-200 mx-auto w-1/4 "></div>

            {/* description */}

            <p className="text-white w-60 text-center">Where culinary artistry meets timeless elegance. Every dish tells a story, every moment creates a memory</p>

            {/* explore menu button */}

            <button className="text-white py-2.5 px-6 bg-buttons-bg transition-colors duration-300">
              EXPLORE MENU
            </button>

            {/* Virtual tour button*/}

            <button className="text-white py-2.5 px-6 border-amber-200 border-2">VIRTUAL TOUR</button>

            {/* Square with dot animation */}

            <div className="h-10 w-5 border-2 rounded-full border-amber-200 flex flex-col items-center justify-center animate-pulse">
                <div className="w-1.5 h-1.5 bg-amber-200 rounded-full"></div>
            </div>

        </div>

      </div>
    </>
  );
}
