import React from "react";
import {NavLink} from 'react-router-dom'
const SignUp = () => {
  return (
    <div>
      <div className="  p-3">
        <h3 className="text-center">Registration here</h3>

        <div className="m-auto  w-75">
          <form className="  shadow p-5">
            <input
              placeholder="Your Name"
              type="text"
              className="form-control shadow-none my-1"
              aria-label="Sizing example input"
              autoComplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Your Email"
              type="text"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autoComplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Mobile Number"
              type="text"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autoComplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Your Profession"
              type="text"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autocomplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Password"
              type="password"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autocomplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />

            <input
              placeholder="Confirm Your Password"
              type="password"
              className="form-control shadow-none my-2 "
              aria-label="Sizing example input"
              autocomplete="off"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button className="btn btn-outline-dark">Submit</button>
            <br/>
            <NavLink className="text-center" to="/login">i have already login</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
