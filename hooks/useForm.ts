import { useState, ChangeEventHandler } from "react";

interface FormValues {
  [key: string]: any;
}

interface FormState {
  form: FormValues;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
}

const useForm = (values: FormValues): FormState => {
  const [form, setForm] = useState<FormValues>(values);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    form,
    changeHandler,
  };
};

export default useForm;
