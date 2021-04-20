import React from "react";
import { Redirect, Route } from "react-router-dom";



const ProtectedRoute = ({ component, path, exact,condition }) => {
console.log(exact)

  return condition ? (
    <Route component={component} path={path} exact={exact} />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
