import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDoctors } from "../../store/doctorsSlice";
import DoctorCard from "../DoctorCard/DoctorCard";

const DoctorsList = () => {
  const dispatch = useDispatch();
  const { doctors, loading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  if (loading) {
    return <div className="text-center">جارٍ التحميل...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">حدث خطأ: {error}</div>;
  }

  return (
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
  );
};

export default DoctorsList;
