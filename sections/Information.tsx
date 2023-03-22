import { NegativeCard } from "../components";

const negativeEffect = [
  {
    title: "Aqliy qobiliyat",
    img: "/images/child-with-idea-1.png",
    description:
      "Aqliy qobiliyatning pasayishi, pakanalik, semizlik, vaznning keskin kamayib ketishi",
  },
  {
    title: "Qalqonsimon bez",
    img: "/images/child-with-idea-4.png",
    description:
      "Qalqonsimon bez faoliyatining pasayishi, buqoqning rivojlanishi",
  },
  {
    title: "Doimiy charchoq",
    img: "/images/child-with-idea-3.png",
    description: "Doimiy charchoq, xotira buzilishi, soch to'kilishi",
  },
  {
    title: "Gormonlarning",
    img: "/images/child-with-idea-2.png",
    description: "Gormonlarning izdan chiqishi",
  },
];

const Information = () => {
  return (
    <>
      <section
        className="mt-5 bg-no-repeat bg-cover mb-16"
        style={{
          backgroundImage: "url(/images/section-backgrounds/section-2.png)",
          backgroundPosition: "center center",
        }}
      >
        <div className="sm:pt-[16rem] sm:pb-[27rem] py-24">
          <div className="container">
            <div className="mb-14 sm:text-left text-center">
              <h1 className="sm:text-[42px] text-[26px] mb-1 text-lightGreen font-extraBold">
                Salbiy Oqibatlari
              </h1>
              <p className="sm:text-xl text-base text-lightGreen font-bold">
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
    </>
  );
};

export default Information;
