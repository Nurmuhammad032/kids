import React from "react";
import Slider from "react-slick";
import { CustomLeftArrow3, CustomRightArrow3 } from "../components/CustomArrow";

const data = [
  "/images/comment-img.png",
  "/images/comment-img.png",
  "/images/comment-img.png",
  "/images/comment-img.png",
  "/images/comment-img.png",
  "/images/comment-img.png",
];

const Comments = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          variableWidth: false,
          centerPadding: "0px",
          // slidesToShow: 1,
          // slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="md:mt-[20rem] sm:mt-[10rem] mt-[5rem] w-full sm:mb-[7rem] mb-[4rem] comment-section overflow-hidden px-4">
      <div>
        <h1 className="section-title text-white text-center mb-20">
          Mijozlarimiz fikrlari
        </h1>
        {/* <img
          src={"/images/comment-img.png"}
          alt="play icon"
          className="w-full"
        /> */}
        <div>
          <Slider
            {...settings}
            nextArrow={<CustomRightArrow3 />}
            prevArrow={<CustomLeftArrow3 />}
          >
            {data.map((img, i) => (
              <div className="md:max-w-[706px] w-full cursor-pointer" key={i}>
                <img src={img} alt="play icon" className="w-full" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Comments;
