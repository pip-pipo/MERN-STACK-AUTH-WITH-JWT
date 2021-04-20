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
    <div>
      <div class="row p-4 shadow m-auto">
        <div class="col-4">
          <img
            className="rounded-1 w-75"
            src="https://avatars.githubusercontent.com/u/69667157?v=4"
            alt="hlw"
          />
        </div>
        <div class="col-4">
          <h3>Morsalin</h3>
          <div>user Id : </div>
          <div>Name : Morsalin</div>
          <div>Email : morsalin@gmail.com</div>
          <div>Phone : 054545453</div>
          <div>Proffesstion : Web Developer</div>
        </div>
        <div class="col-4">
          <h3>links</h3>
          <div>Facebook</div>
          <div>instagram</div>
          <div>Youtube</div>
          <div>twetter</div>
          <div>Github</div>
        </div>
      </div>
    </div>
  );
};

export default About;
