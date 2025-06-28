import React from "react";
import { useSelector } from "react-redux";
import DoctorCard from "../DoctorCard/DoctorCard";

const DoctorsList = () => {
  const { doctors, loading, error } = useSelector((state) => state.doctors);
  const currentLang = useSelector((state) => state.language.current);

  if (loading) {
    return (
      <div className="text-center mt-10">
        {currentLang === "en" ? "Loading..." : "جارٍ التحميل..."}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        {currentLang === "en" ? `Error: ${error}` : `حدث خطأ: ${error}`}
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center mt-[80px]">
      <div className="grid grid-cols-4 gap-[24px] w-[1008px]">
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
              language={currentLang}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsList;
