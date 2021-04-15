import UserSchema from "../models/UserSchema.js";



const registrationUser = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ msg: "please fill all fields" });
  }
  try {
    const userExist = await UserSchema.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: " User Already Exist" });
    }else if(password!=cpassword){
      return res.status(422).json({msg:"password are not matching"})
    }else{
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
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "please fille all the fields" });
    }
    const userSingin =await UserSchema.findOne({ email: email });
    if(!userSingin){
        res.status(400).json({error:"user not Exists"})
    }
 
    res.status(200).json({error:"user Login Succesfully"})

  } catch (error) {
    console.log(error);
  }
};




export const controller = {
  registrationUser,
  SignIn,
};
