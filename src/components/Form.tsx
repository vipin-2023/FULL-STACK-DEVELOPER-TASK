import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select  from "react-select";
import "./form.css";
import Illustration from "../assets/images/register-img.jpg";
import { GroupBase ,Options } from "react-select";

interface FormValues {
  name: string;
  mobile: string;
  email: string;
  password: string;
  reEnterPassword: string;
  selectField: string;
  checkboxField: boolean;
  radioButtonField: string;
}

const options: Array<GroupBase<string>> = [
  {
    label: "OPTION 1",
    options: [
      "option1"
    ],
  },
  {
    label: "OPTION 2",
    options: [
      "option2"
    ],
  },

  {
    label: "OPTION 3",
    options: [
      "option3",
    ],
  },
  {
    label: "OPTION 4",
    options: [
      "option4"
    ],
  },
];

const Form: React.FC = () => {

  const {
    register,
    handleSubmit, control,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleSelectChange = (selectedOption: any) => {
    console.log(selectedOption); // Output the selected option to the console
  };

  const password = watch("password");

  return (
    <div className="canvas">
      <div className="wrapper">
        <div className="images">
          <img src={Illustration} alt="" />
        </div>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrapper">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                className="input-fields"
                {...register("name", { required: true })}
                id="name"
              />
              {errors.name && (
                <span className="error">This field is required</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="mobile">Mobile</label>
              <input
                className="input-fields"
                {...register("mobile", { pattern: /^[0-9+-]+$/i })}
                id="mobile"
              />
              {errors.mobile && (
                <span className="error">Invalid mobile number</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                className="input-fields"
                {...register("email", {
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                id="email"
              />
              {errors.email && (
                <span className="error">Invalid email address</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                className="input-fields"
                {...register("password", {
                  pattern:
                    /^(?=.*\d).{6,}$/,
                })}
                type="password"
                id="password"
              />
              {errors.password && (
                <span className="error">Invalid password</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="reEnterPassword">Re-enter Password</label>
              <input
                className="input-fields"
                type="password"
                {...register("reEnterPassword", {
                  required: "Please re-enter your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                id="reEnterPassword"
              />
              {errors.reEnterPassword && (
                <span className="error">Passwords do not match</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="selectField">Group Select Fields</label>
              <Controller
                name="selectField"
                control={control}
                render={({ field }) => (
                  <Select
                    className="select-field"
                    options={options}
                   
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption || ""); // Pass an empty string if selectedOption is undefined
                    }}
                    value={field.value || ""}
                  />
                )}
              />
            </div>

            <div className="form-field" id="checkbox-field">
              <input type="checkbox" {...register("checkboxField")} />
              <label className="labals"> Checkbox </label>
            </div>

            <div className="form-field" id="radio-field">
              <div>
                <input
                  type="radio"
                  value="option1"
                  {...register("radioButtonField")}
                />
                <label className="labals"> Option 1</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="option2"
                  {...register("radioButtonField")}
                />
                <label className="labals"> Option 2</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="option3"
                  {...register("radioButtonField")}
                />
                <label className="labals"> Option 3</label>
              </div>
            </div>
            <div id="submit-button">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
