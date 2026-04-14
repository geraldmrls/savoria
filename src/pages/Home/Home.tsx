// components
import { Header } from "../../components/Header/Header.tsx";
import { QualityInfo } from "./QualityInfo.tsx";

// image background
import bgHome from "../../assets/viejo-te.jpg";
import { CulinaryExcellence } from "../../components/Header/CulinaryExcellence.tsx";
import { ContentOnImage } from "./ContentOnImage.tsx";

import "./Home.css";

export function Home() {
  return (
    <div className="pt-20">
      <Header />
      <div
        style={{ backgroundImage: `url(${bgHome})` }}
        className="relative bg-cover bg-center h-100 mt-4 before:bg-black/50 before:absolute before:inset-0"
      >
        {/* content on image */}
        {<ContentOnImage />}
      </div>

      {/* quality info */}
      <QualityInfo />

      {/* culinary excellence */}
      <CulinaryExcellence />
    </div>
  );
}
