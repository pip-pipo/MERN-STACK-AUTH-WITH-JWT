import React, { useEffect,useState } from "react";

import { callAboutPage } from "../customHooks/useSignUpHooks";
const About = () => {

  const [userData,setUserData] = useState({
      _id:"",
      name:"",
      email:"",
      work:"",
      phone:"",
  })



useEffect(()=>{
  callAboutPage();
  const res = callAboutPage();
    res.then(data=>{
      if(!data) return 'no data available'
      setUserData(data)
    }).catch((err)=>console.log(err))
},[])


console.log(userData)

  return (
    userData?
    <div>
      <div class="row p-4 shadow m-auto">
        <div class="col-md-4 text-center">
          <img
            className="rounded-1 w-75"
            src="https://avatars.githubusercontent.com/u/69667157?v=4"
            alt="hlw"
          />
        </div>
        <div class="my-3 text-center col-md-3">
          <h3>User Details</h3>
          <div>user Id : {userData._id} </div>
          <div>Name : {userData.name}</div>
          <div>Email : {userData.email}</div>
          <div>Phone : {userData.phone}</div>
          <div>Proffesstion : {userData.work}</div>
        </div>
        <div class="col-md-2 text-center">
          <h3>links</h3>
          <div>Facebook</div>
          <div>instagram</div>
          <div>Youtube</div>
          <div>twetter</div>
          <div>Github</div>
        </div>
      </div>
    </div>:"loading..."
  );
};

export default About;
