import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/languageSlice";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language.current);

  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => dispatch(setLanguage("ar"))}
        className={`px-4 py-2 rounded ${
          currentLang === "ar" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => dispatch(setLanguage("en"))}
        className={`px-4 py-2 rounded ${
          currentLang === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
