const jwt = require("jsonwebtoken");
const userData = require("../models/schema");

const Authanticate = async (req, res, next) => {
  try {
    let token = await req.cookies.jwtoken;

    const verifyuser = jwt.verify(token, process.env.SECRETKEY);

    const user = await userData.findOne({
      _id: verifyuser._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error(`user not found`);
    }
    console.log(user);
    req.token = token;
    req.user = user;
    req.userId = user._id;
    next();
  } catch (error) {
    res.status(401).send(`unauthrized : not found token`);
  }
};

module.exports = Authanticate;
