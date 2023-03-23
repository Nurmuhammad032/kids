import React from "react";
import { DiscountComponent } from "../components";
import useForm from "../hooks/useForm";

const DiscountFooter = () => {
  const { form, changeHandler } = useForm({
    name: "",
    number: "",
  });
  return (
    <section className="section__with-background" id="contact">
      <img
        src="/images/section-backgrounds/section-10.png"
        alt="bacground"
        className="bacground-img"
      />
      <div className="container">
        <div className="content">
          <div className="pt-32">
            <DiscountComponent
              form={form}
              changeHandler={changeHandler}
              isFooter={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountFooter;
