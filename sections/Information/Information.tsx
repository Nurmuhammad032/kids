import {
  NegativeCard,
  UsefulPropertiesCard,
  VitaminCard,
} from "../../components";
import { negativeEffect, useFullProperties, vitamin } from "./data";

const Information = () => {
  return (
    <>
      <section className="mt-5 section__with-background">
        <img
          src="/images/section-backgrounds/section-2.png"
          alt="bacground"
          className="bacground-img"
        />
        <div className="content">
          <div className="container">
            <div className="mb-14 sm:text-left text-center">
              <h1 className="text-lightGreen section-title">
                Salbiy Oqibatlari
              </h1>
              <p className="text-lightGreen section-description">
                Yod yetishmasligining bola organizmiga salbiy ta'sirlari:
              </p>
            </div>
            <div className="flex justify-between flex-wrap">
              {negativeEffect.map(({ img, title, description }, i) => (
                <NegativeCard
                  img={img}
                  title={title}
                  description={description}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container">
          <div className="text-white mb-14">
            <h1 className="section-title">Vitamini Yetishmasligini</h1>
            <p className="section-description">
              Bolalarda yod, vitamin va minerallar yetishmasligini bildiruvchi
              belgilar
            </p>
          </div>
          <div className="flex justify-between flex-wrap">
            {vitamin.map(({ img, text }, i) => (
              <VitaminCard img={img} text={text} key={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section__with-background">
        <img
          src="/images/section-backgrounds/section-4.png"
          alt="bacground"
          className="bacground-img"
        />
        <div className="container">
          <div className="content">
            <div className="flex justify-between items-center xl:flex-row flex-col">
              <div className="xl:w-[45%] md:w-2/3 w-full xl:mx-0 mx-auto">
                <div className="text-lightGreen xl:text-left text-center">
                  <h1 className="section-title">foydali xususiyatlari</h1>
                  <p className="section-description">
                    EndoMarine kids — tarkibi ikki barobar yod, vitaminlar va
                    minerallar bilan boyitilgan multikompleksining foydali
                    xususiyatlari
                  </p>
                </div>
                <div className="max-w-[600px] xl:mx-0 mx-auto">
                  <img
                    src="/images/image-1.png"
                    alt="there's image"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="xl:w-1/2 md:w-2/3 w-full xl:mx-0 mx-auto xl:mt-0 mt-5">
                <div className="bg-gradientBlue sm:p-7 px-[11px] py-8 border-radius-lg">
                  {useFullProperties.map((text, i) => (
                    <UsefulPropertiesCard key={i} text={text} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
