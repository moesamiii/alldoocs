import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MedicalTourismHeader from "./components/MedicalTourismHeader/MedicalTourismHeader";
import SpecializationList from "./components/SpecializationList/SpecializationList";
import DoctorsList from "./components/DoctorsList/DoctorsList";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

const App = () => {
  return (
    <>
      <Navbar />
      <MedicalTourismHeader />

      <div className="flex justify-center mt-4">
        <div className="flex flex-row gap-4 max-w-[1440px] w-full px-4">
          {/* rtl */}
          <SpecializationList />

          {/* الاطباء و اسمائهم بلغتين مختلفة */}
          <div className="flex-1">
            <DoctorsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
