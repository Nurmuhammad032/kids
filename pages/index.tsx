import {
  Advices,
  Comments,
  Discount,
  DiscountFooter,
  EndoMarineKids,
  Information,
  Landing,
  Sertificate,
} from "../sections";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Landing />
      <Information />
      <Discount />
      <EndoMarineKids />
      <Advices />
      <Sertificate />
      <Comments />
      <DiscountFooter />
    </>
  );
}
