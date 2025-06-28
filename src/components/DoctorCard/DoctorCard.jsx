import React from "react";
import docsImage from "../../assets/docsimage.png";

const DoctorCard = ({ name, specialization, rating, image }) => {
  return (
    <div className="w-[240px] flex flex-col gap-[10px]">
      {/* Image container */}
      <div className="w-[240px] h-[186.25px] bg-[#023554] rounded-[9.38px] relative overflow-hidden">
        <img
          src={image || docsImage}
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Rating */}
        <div className="absolute top-[8px] left-[8px] bg-[#0798F1] text-white text-[12px] font-semibold rounded px-2 py-0.5 flex items-center gap-1">
          ⭐ {rating}
        </div>
      </div>

      {/* Name & Specialization */}
      <div className="flex flex-col w-full px-[4px] gap-[4px]">
        <span
          className="text-[#222222] font-medium text-[24px] leading-[160%] text-right"
          style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
        >
          {name}
        </span>
        <span
          className="text-[#686767] text-[16px] font-normal leading-[160%] text-right"
          style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
        >
          {specialization}
        </span>
      </div>

      {/* Button */}
      <button
        className="w-full h-[40px] border border-[#0798F1] rounded-[8px] text-[#0798F1] text-[16px] font-medium flex items-center justify-center"
        style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
      >
        عرض المزيد
      </button>
    </div>
  );
};

export default DoctorCard;
