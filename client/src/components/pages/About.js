import React from "react";

const About = () => {
  return (
    <div>
      <div class="row">
        <div class="col-4">
          <img
            className="rounded-1 w-75"
            src="https://avatars.githubusercontent.com/u/69667157?v=4"
            alt="hlw"
          />
        </div>
        <div class="col-4">
          <h3>Morsalin</h3>
        </div>
        <div class="col-4">
          <h3>Edit Profile</h3>
        </div>
      </div>
      <h3>user Data</h3>
      <div class="container">
        <div>user Id : 45454545455</div>
        <div>Name : Morsalin</div>
        <div>Email : morsalin@gmail.com</div>
        <div>Phone : 054545453</div>
        <div>Proffesstion : Web Developer</div>
      </div>
    </div>
  );
};

export default About;
