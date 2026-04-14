// components
import { Header } from "../../components/Header/Header.tsx";
import { ContentOnImage } from "./ContentOnImage.tsx";
import { QualityInfo } from "./QualityInfo.tsx";
import { CulinaryExcellence } from "./CulinaryExcellence.tsx";
import { MakeReservationInfo } from "./MakeReservationInfo.tsx";
import { BottomNavBar } from "../../components/BottomNavBar/BottomNavBar.tsx";

// image background
import bgHome from "../../assets/viejo-te.jpg";




import "./Home.css";

export function Home() {
  return (
    <div className="pt-20 mb-35">
      <Header />

      {/* background image */}
      <div
        style={{ backgroundImage: `url(${bgHome})` }}
        className=" flex flex-col justify-center items-center relative bg-cover bg-center h-100 mt-4 before:bg-black/60 before:absolute before:inset-0"
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


      {/* bottom nav bar */}
      <BottomNavBar />
    </div>
  );
}
