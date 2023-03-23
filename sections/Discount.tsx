import MaskedInput from "react-text-mask";
import { DiscountComponent } from "../components";
import useForm from "../hooks/useForm";

const Discount = () => {
  const { form, changeHandler } = useForm({
    name: "",
    number: "",
  });

  return (
    <section className="my-5 xl:py-40 md:py-28 py-0">
      <div className="container">
        <DiscountComponent
          form={form}
          changeHandler={changeHandler}
          isFooter={false}
        />
      </div>
    </section>
  );
};

export default Discount;
