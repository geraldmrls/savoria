// components
import { ContentOnImage } from "./ContentOnImage.tsx";
import { QualityInfo } from "./QualityInfo.tsx";
import { CulinaryExcellence } from "./CulinaryExcellence.tsx";
import { MakeReservationInfo } from "./MakeReservationInfo.tsx";
import { ContactInfo } from "./ContactInfo.tsx";

// image background
import bgHome from "../../assets/viejo-te.jpg";

// hooks
import { cn } from "../../utils/cn.ts";


import "./Home.css";

export function Home() {
  return (
    <div className="pt-20 mb-35">

      {/* background image */}
      <div
        style={{ backgroundImage: `url(${bgHome})` }}
        className={cn(
          // mobile
          "flex flex-col justify-center items-center relative bg-cover bg-center h-115 mt-4 before:bg-black/60 before:absolute before:inset-0",

          // desktop
          "lg:h-160 lg:mt-8"
        )}
      >
        {/* content on image */}
        {<ContentOnImage />}
      </div>

      {/* quality info */}
      <QualityInfo />

      {/* culinary excellence */}
      <CulinaryExcellence />

      {/*Make reservation section  */}
      <MakeReservationInfo />

      {/* contact info */}
      <ContactInfo />
    </div>
  );
}
