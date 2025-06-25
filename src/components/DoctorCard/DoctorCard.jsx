import React from "react";
import docsImage from "../../assets/docsimage.png";

const DoctorCard = ({ name, specialization, rating, image }) => {
  return (
    <div className="w-[240px] flex flex-col gap-2">
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

      <div className="flex flex-col items-end w-full px-1">
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

      <button
        className="w-[240px] h-[40px] border border-[#0798F1] rounded-[8px] text-[#0798F1] font-medium text-[18px] flex items-center justify-center"
        style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
      >
        عرض المزيد
      </button>
    </div>
  );
};

export default DoctorCard;
