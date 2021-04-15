import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const useDb=()=>{
    mongoose.connect(process.env.MONGODB_URI,{
        useCreateIndex:true,
        useFindAndModify:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("db success")
    }).catch(()=>{
        console.log('not db')
    })
}

export default useDb;
