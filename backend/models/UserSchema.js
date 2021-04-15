import mongoose from "mongoose";
import bcrypt from 'bcrypt'

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
});

users.pre('save',async function(next){
    if(this.isModified("password")){
      this.password =await bcrypt.hash(this.password,12);
      this.cpassword =await bcrypt.hash(this.cpassword,12);
    }
    next();
})

const UserSchema = mongoose.model("usersSchema", users);
export default UserSchema;


