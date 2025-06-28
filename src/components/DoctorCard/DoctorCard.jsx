import React from "react";
import docsImage from "../../assets/docsimage.png";

const DoctorCard = ({
  name,
  specialization,
  rating,
  image,
  language = "ar",
}) => {
  // ✅ Swap this line
  const textAlign =
    language === "ar" ? "text-left items-start" : "text-right items-end";

  return (
    <div className="w-[240px] flex flex-col gap-2">
      {/* Image container */}
      <div className="w-[240px] h-[186.25px] bg-[#023554] rounded-[9.38px] relative overflow-hidden">
        <img
          src={image || docsImage}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-[#0798F1] text-white text-xs font-semibold rounded px-2 py-0.5 flex items-center gap-1">
          ⭐ {rating}
        </div>
      </div>

      {/* Text content */}
      <div className={`flex flex-col w-full px-1 ${textAlign}`}>
        <span
          className="text-[#222222] font-medium text-[18px]"
          style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
        >
          {name}
        </span>
        <span
          className="text-[#686767] text-[16px] leading-[160%]"
          style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
        >
          {specialization}
        </span>
      </div>

      {/* Button */}
      <button
        className="w-[240px] h-[40px] border border-[#0798F1] rounded-[8px] text-[#0798F1] font-medium text-[18px] flex items-center justify-center"
        style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
      >
        {language === "ar" ? "عرض المزيد" : "View More"}
      </button>
    </div>
  );
};

export default DoctorCard;
