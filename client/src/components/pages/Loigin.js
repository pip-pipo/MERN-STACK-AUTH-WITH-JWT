import React from "react";
import { NavLink } from "react-router-dom";
const Loigin = () => {
  return (
    <div>
      <div className="  p-3">
        <h3 className="text-center">Login here</h3>

        <div className="m-auto  w-75">
          <form className="  shadow p-5">
            <input
              placeholder="Your Email"
              type="text"
              className="form-control shadow-none my-2"
              aria-label="Sizing example input"
              autoComplete="off"
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
