import React from "react";
import { useSelector } from "react-redux";
import DoctorCard from "../DoctorCard/DoctorCard";

const DoctorsList = () => {
  const { doctors, loading, error } = useSelector((state) => state.doctors);
  const currentLang = useSelector((state) => state.language.current);

  if (loading) {
    return (
      <div className="text-center">
        {currentLang === "en" ? "Loading..." : "جارٍ التحميل..."}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        {currentLang === "en" ? `Error: ${error}` : `حدث خطأ: ${error}`}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] w-[1008] h-[1279px]">
      {doctors.map((item) => {
        const doctor = item.doctor.doctorPersonalInfo;

        const name =
          currentLang === "en"
            ? doctor.englishName || "Name not available"
            : doctor.arabicName || "الاسم غير متوفر";

        const specialization =
          currentLang === "en"
            ? item.additionalData?.englishSpecialization || "Not specified"
            : item.additionalData?.arabicSpecialization || "غير محدد";

        const rating = doctor.averageRating || "0";

        return (
          <DoctorCard
            key={doctor.userId}
            name={name}
            specialization={specialization}
            rating={rating}
            image={doctor.userImage}
          />
        );
      })}
    </div>
  );
};

export default DoctorsList;
