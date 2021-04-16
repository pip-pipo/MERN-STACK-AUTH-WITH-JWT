import UserSchema from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registrationUser = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ msg: "please fill all fields" });
  }
  try {
    const userExist = await UserSchema.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: " User Already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ msg: "password are not matching" });
    } else {
      const user = new UserSchema({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      await user.save();
      res.status(201).json({ msg: "user registerd succesfully" });
    }
  } catch (err) {
    console.log(err);
  }
};

const SignIn = async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "please fille all the fields" });
    }

    const userSingin =await UserSchema.findOne({ email: email });
    if(!userSingin){
        res.status(400).json({error:"user not Exists"})
    }
 
   
    if (userSingin) {
      const isMatch = await bcrypt.compare(password, userSingin.password);
      const token = await userSingin.generateAuthToken();
      console.log(token);

      res.cookie("jwtToken",token,{
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true,secure: false,sameSite: "Lax"
      })

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Cridentials" });
      } else {
        res.status(200).json({ error: "user Login Succesfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Cridentials" });
    }
  } catch (error) {
    console.log(error);
  }
};








export const controller = {
  registrationUser,
  SignIn,
  
};
