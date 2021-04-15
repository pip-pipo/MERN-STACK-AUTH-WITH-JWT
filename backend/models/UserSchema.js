import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import  jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

const users = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    trim:true,
    minHeight: 4,
  },

  cpassword: {
    type: String,
    required: true,
    trim:true,
    minHeight: 4,
  },
  tokens:[
    {
      token:{
        type:String,
        required:true,
      }
    }
  ]
});

users.pre('save',async function(next){
    if(this.isModified("password")){
      this.password =await bcrypt.hash(this.password,12);
      this.cpassword =await bcrypt.hash(this.cpassword,12);
    }
    next();
})


// generateAuth jwt Token 

users.methods.generateAuthToken =async function(){
try {
  let token = jwt.sign({_id:this._id},process.env.SECRECT_KEY);
  this.tokens  = this.tokens.concat({token:token});
  await this.save();
  return token;
} catch (err) {
  console.log(err)
}
}


const UserSchema = mongoose.model("usersSchema", users);
export default UserSchema;


