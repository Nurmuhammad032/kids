import React from "react";

interface Props {
  img: string;
  title: string;
  description: string;
}

const NegativeCard = ({ img, title, description }: Props) => {
  return (
    <div className="border-radius-lg bg-lightGreen p-[18px] sm:pr-11 negative-card mb-5">
      <div className="flex items-center sm:flex-row flex-col sm:text-left text-center ">
        <div className="min-w-[142px] h-[157px] sm:mr-8 sm:mb-0 mb-6">
          <img
            src={img}
            alt="child"
            className="w-full h-full object-cover border-radius-lg"
          />
        </div>
        <div>
          <h2 className="mb-3 text-2xl text-white font-bold">{title}</h2>
          <p className="text-base text-white font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NegativeCard;
