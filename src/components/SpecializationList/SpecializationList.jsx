import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecializations } from "../../store/specializationSlice";
import {
  fetchDoctorsBySpecialization,
  fetchDoctors,
} from "../../store/doctorsSlice";

const SpecializationList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(
    (state) => state.specializations
  );
  const currentLang = useSelector((state) => state.language.current); // ar or en

  useEffect(() => {
    dispatch(fetchSpecializations());
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div
      className="
        w-[230px]
        h-[897px]
        bg-[#023554]
        rounded-[16px]
        p-4
        gap-2
        shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
        flex flex-col
        overflow-y-auto
      "
    >
      {/* All Button */}
      <button
        className="w-[198px] h-[40px] bg-[#F3FAFE] rounded-[8px] flex items-center justify-between px-3 mb-2"
        onClick={() => dispatch(fetchDoctors())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#0798F1]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span
          className="text-[#0798F1] font-medium text-[18px] leading-[14px] tracking-[-0.5px]"
          style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
        >
          {currentLang === "en" ? "All" : "الكل"}
        </span>
      </button>

      {loading && <p className="text-white text-center">تحميل...</p>}
      {error && <p className="text-red-500 text-center">خطأ: {error}</p>}

      {Array.isArray(list) && list.length > 0
        ? list.map((item) => {
            const name = currentLang === "en" ? item.en_Name : item.ar_Name;
            return (
              <div
                key={item.id}
                onClick={() => dispatch(fetchDoctorsBySpecialization(item.id))}
                className="w-full border border-[#FEFEFE]/0 hover:border-[#FEFEFE] rounded-[8px] p-2 flex flex-row-reverse items-center gap-[6px] cursor-pointer"
              >
                <img
                  src={item.logo}
                  alt={name}
                  className="w-6 h-6 object-contain"
                />
                <span
                  className="text-white text-sm truncate"
                  style={{
                    maxWidth: "160px",
                    direction: currentLang === "en" ? "ltr" : "rtl",
                    textAlign: currentLang === "en" ? "left" : "right",
                  }}
                  title={name}
                >
                  {name}
                </span>
              </div>
            );
          })
        : !loading &&
          !error && <p className="text-white text-center">لا توجد بيانات</p>}
    </div>
  );
};

export default SpecializationList;
