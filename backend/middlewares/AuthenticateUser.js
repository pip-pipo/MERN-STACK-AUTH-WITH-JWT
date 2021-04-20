import jwt from "jsonwebtoken";
import UserSchema from "../models/UserSchema.js";

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;

    const jwtVerify = jwt.verify(token, process.env.SECRECT_KEY);

    const userToken = await UserSchema.findOne({
      _id: jwtVerify._id,
      "tokens.token": token,
    });

    if (!userToken) {
      res.status(500).json({
        msg: "Internal Server Error",
      });
      return;
    }
    req.token = token;
    req.rootUser = userToken;
    req.userID = userToken._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized token:provided");
}
};

export default Authenticate;
