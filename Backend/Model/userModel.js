const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  Emailaddress: {
    type: String,
    required: true,
  },
  Phonenumber: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  status: { 
    type: String,
    default: "active",
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  
  if (this.isModified("Password")) {
    const salt = await bcrypt.genSalt();
    this.Password = await bcrypt.hash(this.Password, salt);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
