import React, { useState } from 'react'
import { useForm } from 'react-formid';
import { Link } from 'react-router-dom';
import './login.css'
const LoginForm = () => {
    const[togglePass,setToggle] = useState(false)
    const Password = "Nirav"
    const { inputs, handleSubmit, errors, handleChange } = useForm({
      defaultValues: { email: "", password: "" },
      validation: {
        email: {
          required: true,
        },
        password: {
          required:true,
          isValid: (val) =>
            val === Password || "Incorrect Password",
        },
      },
    });
    const handleTogle = ()=>{
      if(inputs.password.length !== 0){
  
        setToggle(!togglePass)
      }
    }
    const onSubmit = (data) => console.log(data);
    return (
      <div id="login">
  
      <div className="login-box" >
        <div className="head-text">
          <span>Login</span>
        </div>
        <div className="login-body">
          <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                placeholder="email address"
              />
              {errors.email && <span className="err-msg">{errors.email}</span>}
            </div>
            <div className="form-group">
              <input
                type={`${togglePass? "text" :"password"}`}
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
          </form>
        </div>
        <div className="btn-container">
          <button className="show-btn" onClick={handleTogle} type="button">
            <i className={`${togglePass?"bi bi-eye-slash fa-2x":"bi bi-eye fa-2x"}`}></i>
          </button>
          <button className="submit-btn" form="loginForm" type="submit">
            Submit
          </button>
        </div>
        <div className="reg-link">
          <span>
            New here! -{" "}
            <Link to={"/register"} className="link-text">
              register now
            </Link>
          </span>
        </div>
      </div>
      </div>
    );
}

export default LoginForm