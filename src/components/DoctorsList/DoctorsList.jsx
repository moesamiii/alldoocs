import React from "react";
import { useSelector } from "react-redux";
import DoctorCard from "../DoctorCard/DoctorCard";

const DoctorsList = () => {
  const { doctors, loading, error } = useSelector((state) => state.doctors);
  const { selected } = useSelector((state) => state.specializations); // ✅ التخصص المختار

  if (loading) {
    return <div className="text-center">جارٍ التحميل...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">حدث خطأ: {error}</div>;
  }

  return (
    <div className="w-full">
      {/* ✅ عرض رسالة التخصص المختار */}
      {selected && (
        <div className="mb-6 p-4 bg-[#E5F6FF] rounded-lg text-[#023554] text-right font-semibold text-lg shadow">
          أنت الآن في تخصص: {selected.ar_Name}
        </div>
      )}

      {/* ✅ عرض الأطباء */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-[36px] 
          w-full
        "
      >
        {doctors.map((item) => {
          const doctor = item.doctor.doctorPersonalInfo;
          const specialization =
            item.additionalData.arabicSpecialization || "غير محدد";
          const rating = doctor.averageRating || "0";

          return (
            <DoctorCard
              key={doctor.userId}
              name={doctor.arabicName || "غير متوفر"}
              specialization={specialization}
              rating={rating}
              image={doctor.userImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsList;
