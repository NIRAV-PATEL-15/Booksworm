import React, { useState } from "react";
import "./register.css";
import { useForm } from "react-formid";
import { Link } from "react-router-dom";
const RegisterationForm = () => {
  const [togglePass, setToggle] = useState(false);

  const { inputs, handleSubmit, errors, handleChange } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cnfPass: "",
    },
    validation: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
      },
      password: {
        hasMoreThan6Chars: (val) =>
          val.length >= 6 || "Please enter 6 or more characters",
        hasLessThan15Chars: (val) =>
          val.length <= 15 || "Please must be less than 15 characters ",
        hasCapsChars: (val) =>
          /[A-Z]/.test(val) || "Please enter at least one capital letter",
        hasLowercaseChars: (val) =>
          /[a-z]/.test(val) || "Please enter at least one lowercase letter",
        hasNumChars: (val) =>
          /[0-9]/.test(val) || "Please enter at least one number",
        hasSpecialChars: (val) =>
          /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(val) ||
          "Please enter at least one special character",
      },
      cnfPass: {
        required: true,
        isEqual: (val) => val === inputs.password || "pasword didn't matched",
      },
    },
  });
  const handleTogle = () => {
    if (inputs.password.length !== 0) {
      setToggle(!togglePass);
    }
  };
  const onSubmit = (data) => console.log(data);

  return (
    <div className="reg-container" id="reg">
      <div className="reg-box">
        <div className="head-text">
          <span>Registration</span>
        </div>
        <div className="reg-body">
          <form id="RegForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="name-container">
              <div className="fname">
                <input
                  type="text"
                  name="firstName"
                  value={inputs.firstName}
                  onChange={handleChange}
                  placeholder="first Name"
                />
                {errors.firstName && (
                  <span className="err-msg">{errors.firstName}</span>
                )}
              </div>
              <div className="lname">
                <input
                  type="text"
                  name="lastName"
                  value={inputs.lasstName}
                  onChange={handleChange}
                  placeholder="last name"
                />
                {errors.lastName && (
                  <span className="err-msg">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="email-container">
              <input
                type="text"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                placeholder="email address"
              />
              {errors.email && <span className="err-msg">{errors.email}</span>}
            </div>
            <div className="pass-container">
              <div className="pass">
                {" "}
                <input
                  type={`${togglePass ? "text" : "password"}`}
                  id="pasword"
                  value={inputs.password}
                  onChange={handleChange}
                  placeholder="password"
                  name="password"
                />
                {errors.password && (
                  <span className="err-msg">{errors.password}</span>
                )}
              </div>
              <div className="cpass">
                <input
                  type={`${togglePass ? "text" : "password"}`}
                  value={inputs.cnfPass}
                  onChange={handleChange}
                  placeholder="confirm password"
                  name="cnfPass"
                />
                {errors.cnfPass && (
                  <span className="err-msg">{errors.cnfPass}</span>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="reg-btn-container">
          <button className="show-btn" onClick={handleTogle} type="button">
            <i
              className={`${
                togglePass ? "bi bi-eye-slash fa-2x" : "bi bi-eye fa-2x"
              }`}
            ></i>
          </button>
          <button className="submit-btn" form="RegForm" type="submit">
            register
          </button>
        </div>
        <div className="reg-link">
          <span>
            Already member! -{" "}
            <Link to={"/login"} className="link-text">
              login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterationForm;
