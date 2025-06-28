import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import MedicalTourismHeader from "./components/MedicalTourismHeader/MedicalTourismHeader";
import SpecializationList from "./components/SpecializationList/SpecializationList";
import DoctorsList from "./components/DoctorsList/DoctorsList";

const App = () => {
  const currentLang = useSelector((state) => state.language.current);
  const isArabic = currentLang === "ar";

  return (
    <>
      <Navbar />
      <MedicalTourismHeader />

      <div className="flex justify-center mt-4">
        <div
          className={`flex ${
            isArabic ? "flex-row-reverse" : "flex-row"
          } gap-4 max-w-[1440px] w-full px-4`}
        >
          {/*  docs section */}
          <div className="flex-1">
            <DoctorsList />
          </div>

          {/* special bar flex dir */}
          <SpecializationList />
        </div>
      </div>
    </>
  );
};

export default App;
