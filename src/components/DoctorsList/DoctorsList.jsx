import React from "react";
import DoctorCard from "../DoctorCard/DoctorCard";

const DoctorsList = () => {
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
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ محمد حكيم"
        specialization="استشاري قلب وأوعية دموية"
        rating="4.5"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ احمد احمد"
        specialization="استشارية أعصاب"
        rating="4.7"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ علي حيدر"
        specialization="استشاري عظام"
        rating="4.6"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ ليلى حسين"
        specialization="استشارية جلدية"
        rating="4.8"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ أحمد خالد"
        specialization="استشاري أطفال"
        rating="4.4"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ سلمى يونس"
        specialization="استشارية نسائية"
        rating="4.9"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ مازن عبد الله"
        specialization="استشاري مسالك بولية"
        rating="4.3"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ هدى سمير"
        specialization="استشارية باطنية"
        rating="4.7"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ رائد مصطفى"
        specialization="استشاري عيون"
        rating="4.5"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ نور الهدى"
        specialization="استشارية نفسية"
        rating="4.6"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ سامر توفيق"
        specialization="استشاري أنف وأذن وحنجرة"
        rating="4.4"
      />
      <DoctorCard
        image="/path-to-image.jpg"
        name="د/ منى عبد العزيز"
        specialization="استشارية أسنان"
        rating="4.8"
      />
    </div>
  );
};

export default DoctorsList;
