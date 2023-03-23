import Slider from "react-slick";
import { CustomLeftArrow2, CustomRightArrow2 } from "../components/CustomArrow";

const data = [
  "/images/sertificate.png",
  "/images/sertificate.png",
  "/images/sertificate.png",
  "/images/sertificate.png",
  "/images/sertificate.png",
  "/images/sertificate.png",
];

const Sertificate = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 869,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
          centerMode: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section
      className="section__with-background my-10 sertificate-section md:pt-[14rem] py-10"
      id="sertificate"
    >
      <img
        src="/images/section-backgrounds/section-8.png"
        alt="bacground"
        className="bacground-img"
      />
      <div className="content">
        <div className="container">
          <div>
            <h1 className="section-title text-lightGreen text-center">
              Sertifikatlar
            </h1>
          </div>
          <div className="mt-8">
            <Slider
              {...settings}
              nextArrow={<CustomRightArrow2 />}
              prevArrow={<CustomLeftArrow2 />}
            >
              {data.map((img, i) => (
                <div
                  className="max-w-[198.22px] sm:min-w-[none] min-w-[148.22px] cursor-pointer relative"
                  key={i}
                >
                  <img src={img} alt="play icon" className="w-full" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sertificate;
