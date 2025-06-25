import React from "react";
import arrowImage from "../../assets/weui_arrow-filled.png";
import mokIcon from "../../assets/mok.png";
import infoIcon from "../../assets/info-icon.png";

const MedicalTourismHeader = () => {
  return (
    <div className="w-full hidden lg:flex justify-between items-center px-10 py-6">
      {/* left instruction + search  */}
      <div className="flex items-center gap-2">
        <div className="w-[217px] h-[40px] flex items-center gap-2 px-5 py-1.5 rounded-[8px] bg-[#023554] rtl">
          <span
            className="text-[#FEFEFE] text-[16px] font-medium leading-[100%]"
            style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
          >
            تعليمات وطرق الحجز
          </span>
          <img src={infoIcon} alt="info" className="w-[24px] h-[24px]" />
        </div>

        <div className="w-[45px] h-[40px] bg-[#023554] rounded-[8px] flex items-center justify-center cursor-pointer">
          <img
            src={mokIcon}
            alt="Search"
            className="w-[21px] h-[27px] object-contain"
          />
        </div>
      </div>

      {/* right back and title  */}
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
          <span
            className="text-[18px] font-medium leading-[1.2] bg-gradient-to-t from-[#6F6F6F] to-[#6F6F6F] bg-clip-text text-transparent"
            style={{ fontFamily: "IBM Plex Sans Arabic" }}
          >
            الرجوع
          </span>
          <img
            src={arrowImage}
            alt="Arrow Right"
            className="w-[12px] h-[24px] object-contain rotate-[270deg]"
          />
        </div>
        <h1
          className="text-[24px] font-semibold leading-[100%] text-[#222222]"
          style={{ fontFamily: "IBM Plex Sans Arabic" }}
        >
          الأطباء
        </h1>
      </div>
    </div>
  );
};

export default MedicalTourismHeader;
