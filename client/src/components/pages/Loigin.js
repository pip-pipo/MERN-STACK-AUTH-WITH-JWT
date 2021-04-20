import React, { useState } from "react";
import { NavLink,Redirect } from "react-router-dom";
const Loigin = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const { email, password, cpassword } = value;

  const inputHandle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };


  const makeLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });
    res
      .json()
      .then(() => {
        alert("login sucessfull");
        <Redirect to="/about"/>
      })
      .catch(() => {
        alert("login not successfull");
      });
  };

  return (
    <div>
      <div className="  p-3">
        <h3 className="text-center">Login here</h3>

        <div className="m-auto  w-75">
          <form className="  shadow p-5">
            <input
              placeholder="Your Email"
              type="text"
              onChange={inputHandle}
              value={email}
              name="email"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autoComplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />
            <input
              placeholder="Password"
              type="password"
              onChange={inputHandle}
              value={password}
              name="password"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autocomplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Confirm Your Password"
              type="password"
              onChange={inputHandle}
              value={cpassword}
              name="cpassword"
              className="form-control shadow-none my-2 "
              aria-label="Sizing example input"
              autocomplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button
              type="submit"
              onClick={makeLogin}
              className="btn btn-outline-dark"
            >
              Submit
            </button>
            <br />

            <NavLink className="text-center" to="/signup">
              Create an Account
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loigin;
