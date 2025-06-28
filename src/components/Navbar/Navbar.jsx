import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/languageSlice";

import man from "../../assets/man.png";
import arrow from "../../assets/weui_arrow-filled.png";
import cart from "../../assets/Cart Plus.png";
import bell from "../../assets/Component 7.png";
import logo from "../../assets/ulmcare-logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language.current);

  useEffect(() => {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [currentLang]);

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    dispatch(setLanguage(newLang));
  };

  return (
    <div className="hidden lg:block w-full bg-white sticky top-68 z-50">
      <div
        className="w-full max-w-[1440px] h-[80px] mx-auto flex items-center justify-between pt-[1px] px-[80px]"
        dir={currentLang === "ar" ? "rtl" : "ltr"} //
      >
        {/*  right side */}
        <div className="flex items-center gap-[42px]">
          <img
            src={logo}
            alt="Ulm Care Logo"
            className="w-[131.54px] h-[36px] object-contain"
          />

          <div className="flex items-center gap-[42px] text-[#6F6F6F] text-sm font-normal">
            <span className="text-[#0798F1] font-bold cursor-pointer">
              {currentLang === "en" ? "Home" : "الرئيسية"}
            </span>
            <div className="flex items-center gap-[5px] cursor-pointer">
              <span>{currentLang === "en" ? "Services" : "خدماتنا"}</span>
              <img src={arrow} alt="Arrow" className="w-2 h-4 object-contain" />
            </div>
            <span className="cursor-pointer">
              {currentLang === "en" ? "Doctors" : "كونكت الاطباء"}
            </span>
            <span className="cursor-pointer">
              {currentLang === "en" ? "Support" : "الدعم"}
            </span>
          </div>
        </div>

        {/* ✅ Left side */}
        <div className="flex items-center gap-[16px]">
          <img
            src={bell}
            alt="Notifications"
            className="w-[24px] h-[24px] object-contain"
          />

          <img
            src={cart}
            alt="Cart"
            className="w-[24px] h-[24px] object-contain"
          />

          {/* ✅ Language toggle */}
          <div
            className="flex items-center gap-[6.67px] cursor-pointer"
            onClick={toggleLanguage}
          >
            <span className="text-[#6F6F6F] font-medium text-sm leading-none">
              {currentLang === "ar" ? "ENG" : "عربي"}
            </span>
            <img
              src={arrow}
              alt="Arrow Down"
              className="w-2 h-4 object-contain"
            />
          </div>

          <img
            src={man}
            alt="user avatar"
            className="w-[42px] h-[42px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
