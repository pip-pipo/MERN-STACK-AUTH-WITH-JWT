import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import {makeSignUp} from '../customHooks/useSignUpHooks';

// import axios from 'axios'
const SignUp = () => {

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const { name, email, phone, work, password, cpassword } = value;

  const handleInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // makeSignUp("/register",{name,email,phone,work,password,cpassword})



    const res = await fetch(`/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      }),
    });
    res
      .json()
      .then(() => {
        console.log("success");
        alert("successfully user added")
      })
      .catch(() => {
          alert("User Not Added")
        console.log("not");
      });







  };

  return (
    <div>
      <div className="  p-3">
        <h3 className="text-center">Registration here</h3>

        <div className="m-auto  w-75">
          <form className="  shadow p-5">
            <input
              placeholder="Your Name"
              type="text"
              name="name"
              className="form-control shadow-none my-1"
              aria-label="Sizing example input"
              autoComplete="off"
              onChange={handleInput}
              value={name}
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Your Email"
              type="text"
              name="email"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autoComplete="off"
              onChange={handleInput}
              value={email}
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Mobile Number"
              type="text"
              name="phone"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autoComplete="off"
              onChange={handleInput}
              value={phone}
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Your Profession"
              type="text"
              name="work"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autoComplete="off"
              onChange={handleInput}
              value={work}
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Password"
              type="password"
              name="password"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autoComplete="off"
              onChange={handleInput}
              value={password}
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Confirm Your Password"
              type="password"
              name="cpassword"
              className="form-control shadow-none my-2 "
              aria-label="Sizing example input"
              autoComplete="off"
              onChange={handleInput}
              value={cpassword}
              aria-describedby="inputGroup-sizing-sm"
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-outline-dark"
            >
              Submit
            </button>
            <br />
            <NavLink className="text-center" to="/login">
              i have already login
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
