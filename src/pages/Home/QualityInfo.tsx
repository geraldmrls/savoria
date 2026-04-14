// svg
import StarIcon from "../../assets/star-icon.svg?react";
import ClockIcon from "../../assets/clock-icon.svg?react";
import LocationIcon from "../../assets/location-icon.svg?react";

export function QualityInfo() {
  return (
    <>
      {/* quality container */}

      <div className="pt-14 flex flex-col gap-10 px-4 max-w-3xl mx-auto">
        {/* star circle */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-2 border-brown-bg flex items-center justify-center mx-auto">
            <StarIcon className="h-8 w-8 stroke-brown-bg fill-white" />
          </div>

          <p className="text-center mt-2.5 text-lg font-semibold">Premium Quality</p>
          <p className="text-center mt-2.5 text-sm leading-6">
            Locally sourced ingredients, expertly crafted
          </p>
        </div>

        {/* clock circle */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-2 border-brown-bg flex items-center justify-center mx-auto">
            <ClockIcon className="h-8 w-8 stroke-brown-bg fill-white" />
          </div>

          <p className="text-center mt-2.5 text-lg font-semibold">Open Daily</p>
          <p className="text-center mt-2.5 text-sm leading-6">
            Serving breakfast, lunch, and dinner
          </p>
        </div>

        {/* location circle */}

        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-2 border-brown-bg flex items-center justify-center mx-auto">
            <LocationIcon className="h-8 w-8 stroke-brown-bg fill-white" />
          </div>

          <p className="text-center mt-2.5 text-lg font-semibold">Prime Location</p>
          <p className="text-center mt-2.5 text-sm leading-6">Heart of the culinary district</p>
        </div>
      </div>
    </>
  );
}
