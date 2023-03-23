import Slider from "react-slick";
import dynamic from "next/dynamic";
import { useState } from "react";
import { CustomLeftArrow, CustomRightArrow } from "../components/CustomArrow";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const data = [
  {
    img: "/images/advice-video-img.png",
    video: "https://www.youtube.com/watch?v=tR10RO97u2E&t=4108s",
  },
  {
    img: "/images/advice-video-img.png",
    video: "https://www.youtube.com/watch?v=Q6ensHzx_44",
  },
  {
    img: "/images/advice-video-img.png",
    video: "https://www.youtube.com/watch?v=tR10RO97u2E&t=4108s",
  },
  {
    img: "/images/advice-video-img.png",
    video: "https://www.youtube.com/watch?v=tR10RO97u2E&t=4108s",
  },
];

const Advices = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleOpenClick = (video: string) => {
    setOpenVideo(true);
    setSelectedVideo(video);
  };

  const handleCloseClick = () => {
    setOpenVideo(false);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="md:py-[14rem] sm:py-24 py-3 advice-section">
        <div className="max-w-[1600px] mx-auto relative">
          <div className="mb-14">
            <h1 className="section-title text-white text-center">
              Mutaxassislar tavsiyalari
            </h1>
          </div>
          <div className="absolute left-0 top-[8rem] hidden md:block w-full">
            <img
              src="/images/line.png"
              alt="line icon"
              className="w-full object-cover"
            />
          </div>
          <Slider
            {...settings}
            nextArrow={<CustomRightArrow />}
            prevArrow={<CustomLeftArrow />}
          >
            {data.map(({ img, video }, i) => (
              <div
                className="md:max-w-[469px] w-full cursor-pointer relative"
                key={i}
                onClick={() => handleOpenClick(video)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <img src="/icons/play-icon.png" alt="play icon" />
                </div>
                <img
                  src={img}
                  alt="there's img of video"
                  className="w-full object-cover "
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div
        className={`transition-all ${
          openVideo ? "visible opacity-100" : "invisible opacity-0"
        } fixed top-0 left-0 min-h-screen w-full bg-black/50 z-[60]`}
        onClick={handleCloseClick}
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white">
          <ReactPlayer
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
            url={selectedVideo}
          />
        </div>
      </div>
    </>
  );
};

export default Advices;
