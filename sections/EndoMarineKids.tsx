const data = [
  {
    title: "Feyxoa",
    info: "Feyxoa — o'zida eng yod saqlaydigan meva hisoblanadi. Buqoqni oldini olishda, aqliy qobiliyatni yaxshilashda yordam beradi. Oshqozon-ichak faoliyatini sog'lomlashtiradi. Markaziy asab sistemasini rag'batlantiradi. Immunitetni ko'taradi.",
  },
  {
    title: "Laminariya Angustati",
    info: "Tarkibida 40% organik yodga ega, shifobaxsh dengiz o'ti. Miyani oziqlantiradi, kunlik yod balansini to'ldiradi. Allergenlar rivojlanishini oldini oladi. Kalsiy yetishmovchiligi xastaliklarida yordam beradi. Gemoglobinni oshiruvchi, immunomodulyator xususiyatiga ega.",
  },
  {
    title: "Pektin",
    info: "Yurak va qon tomir kasalliklarini rivojlanish xavfini kamaytirish Tanani og'ir metallar, tuzlar, radionuklidlar, ortiqcha xolestirin va organizmda to'plangan zararli moddalarni tozalashda ishtirok etadi.",
  },
  {
    title: "Olma sharbatining kukuni",
    info: "Moddalar almashinuvini tezlashtiradi, qalqonsimon bez faoliyatini yaxshilashda samara beradi. Asab tizimini mustahkamlaydi. Gemoglobinni ko'taradi va biologik faol moddalar bilan ta'minlaydi.",
  },
];

const EndoMarineKids = () => {
  return (
    <section className="mt-5 section__with-background">
      <img
        src="/images/section-backgrounds/section-6.png"
        alt="bacground"
        className="bacground-img"
      />
      <div className="content">
        <div className="max-w-[1500px] mt-14 mx-auto sm:px-4 px-2">
          <div className="bg-gradientBlue py-[57px] xl:px-[72px] sm:px-8 px-3 md:rounded-tl-[90px] md:rounded-br-[90px] md:rounded-tr-[30px] md:rounded-bl-[30px] rounded-tl-[35px] rounded-br-[35px] rounded-tr-[5px] rounded-bl-[5px]">
            <div className="flex items-center lg:flex-row flex-col">
              <div className="lg:w-1/2 md:w-3/4 w-full">
                <div className="lg:text-left text-center mb-9 xl:ml-[6rem] lg:ml-11 ml-0">
                  <h1 className="section-title text-white">
                    EndoMarine kids multikompleksining tarkibi
                  </h1>
                </div>
                <div className="w-full">
                  <img
                    src="/images/EndoMarineImage.png"
                    alt="EndoMarine"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 md:w-3/4 w-full lg:mt-0 mt-8">
                {data.map(({ title, info }, i) => (
                  <div className="mb-5" key={i}>
                    <div className="sm:rounded-tl-[35px] sm:rounded-br-[35px] rounded-[10px] sm:rounded-tr-[5px] sm:rounded-bl-[5px] sm:px-9 px-6 py-5 bg-white/10">
                      <h1 className="text-2xl text-white font-bold mb-1">
                        {title}
                      </h1>
                      <p className="text-base font-bold text-white">{info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndoMarineKids;
