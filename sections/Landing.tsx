import React from "react";

const Landing = () => {
  const buttonStyle =
    "font-bold sm:text-base text-sm border-radius-lg py-5 px-[30px] border-[3px] sm:mx-4 mx-0 lg:mx-0 border-solid border-white flex items-center";
  return (
    <section
      className="sm:mt-24 mt-16 h-[60rem] bg-cover custom-background bg-no-repeat"
      style={{
        backgroundImage: "url('/images/landing-background.png')",
      }}
    >
      <div className="container h-full">
        <div className="h-[60rem] xl:w-1/2 lg:w-[60%] sm:w-[90%] w-full lg:m-0 lg:text-left text-center mx-auto flex flex-col lg:justify-start justify-between lg:items-stretch items-center">
          <div className="lg:mt-[150px] mt-5">
            <div className="mb-[66px]">
              <h1 className="md:text-7xl sm:text-5xl text-4xl font-extraBold text-white mb-5">
                EndoMarine Kids
              </h1>
              <p className="sm:font-bold font-medium sm:text-xl text-sm text-white">
                Bolalar organizmini me'yoriy faoliyati uchun zarur bo'lgan yod,
                vitaminlar, mikroelementlar, biologik faol moddalar bilan
                to'yintirishda yordam beruvchi multikompleks!
              </p>
            </div>
          </div>
          <div className="md:flex-row flex flex-col items-center md:justify-between lg:mb-0 mb-5">
            <button className={`bg-gradientGreen ${buttonStyle} mb-4 md:mb-0`}>
              Chegirma narxda xarid qilish
              <img
                src="/icons/arrow-icon.png"
                alt="arrow icon"
                className="ml-5"
              />
            </button>
            <button className={`${buttonStyle} text-white `}>
              Mahsulot haqida{" "}
              <img
                src="/icons/undov-icon.png"
                alt="arrow icon"
                className="ml-5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
