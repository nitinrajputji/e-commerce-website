const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const mySchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new error("invalid email ");
      }
    },
  },

  password: {
    type: "String",
    required: true,
  },
  cpassword: {
    type: "String",
    required: true,
  },
  tokens: [
    {
      token: {
        type: "String",
        required: true,
      },
    },
  ],
});

// password hashing
mySchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// genreate token
mySchema.methods.genreateToken = async function () {
  try {
    const token = await jwt.sign({ _id: this._id }, process.env.SECRETKEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const UserData = mongoose.model("Userdata", mySchema);

module.exports = UserData;
