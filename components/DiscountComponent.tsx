import { ChangeEventHandler } from "react";
import MaskedInput from "react-text-mask";

interface FormValues {
  [key: string]: any;
}

interface Props {
  form: FormValues;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  isFooter: boolean;
}

const DiscountComponent = ({ form, changeHandler, isFooter }: Props) => {
  return (
    <div className="flex xl:flex-row flex-col xl:items-stretch items-center justify-between">
      <div className="xl:w-1/2 md:w-4/5 w-full">
        <div
          className={`${
            isFooter ? "text-lightGreen" : "text-white"
          } mb-10 xl:text-left text-center`}
        >
          <h1 className="section-title">Chegirma narxida xarid qiling</h1>
          <p className="section-description">
            Mutaxassisdan maslahat olish uchun belgi qoldiring va 20% gacha
            chegirmani qo'lga kiriting
          </p>
        </div>
        <div className="xl:w-5/6 w-full">
          <div className="mb-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={changeHandler}
              placeholder="Sizning ismingiz"
              className="form-input"
            />
          </div>
          <div className="mb-5">
            <MaskedInput
              name="number"
              value={form.number}
              onChange={changeHandler}
              mask={[
                "+",
                "9",
                "9",
                "8",
                " ",
                "(",
                /([1-3]|[5-7]|[9])/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
              ]}
              placeholder="+998 ( __ ) ___ __ __"
              type="text"
              className="form-input"
            />
          </div>
          <div className="text-center">
            <button className="text-white text-base font-bold py-4 px-7 rounded-full bg-gradientBlue">
              Murojaad qiling
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 md:w-4/5 w-full xl:mt-0 mt-7">
        <div className="max-w-[700px] xl:mx-0 mx-auto">
          <img src="/images/discount-img.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default DiscountComponent;
