
const jwt = require('jsonwebtoken');
const userModel = require("../Model/userModel");
const bcrypt = require("bcrypt");
const secretKey = "your_secret_key";
const productaddModel=require('../Model/productaddModel')
const users = require('../Model/userModel');
const Products = require('../Model/productaddModel');


module.exports.signup = async (req, res) => {
  try {
    const { username, Emailaddress, Password, Phonenumber } = req.body;

    const emailExist = await userModel.findOne({ Emailaddress: Emailaddress });
    if (emailExist) {
      return res.json({ message: "Email already exists", status: false });
    }

    const newUser = new userModel({
      username: username,
      Emailaddress: Emailaddress,
      Password: Password,
      Phonenumber: Phonenumber,
    });
    const userDetails = await newUser.save();

    return res.json({
      message: "Account created successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error in sign up", status: false });
  }
};

module.exports.login = async (req, res) => {
    try {
        const { username, Password } = req.body;
        const customer = await userModel.findOne({ username });
        if (customer) {
            const auth = await bcrypt.compare(Password, customer.Password);
            if (auth) {
                const token = jwt.sign({ id: customer._id }, secretKey, { expiresIn: '1h' });
                return res.json({ message: "Login successful", success: true, token, username: customer.username, Emailaddress:customer.Emailaddress, userId:customer._id, Phonenumber:customer.Phonenumber }); // Include the username in the response
            } else {
                return res.json({ message: "Incorrect password", success: false });
            }
        } else {
            return res.json({ message: "User not found", success: false });
        }
    } catch (error) {
        console.log(error);
        return res.json({ message: "An error occurred", success: false });
    }
};

module.exports.products = async (req, res) => {
    try {
      const products = await productaddModel.find();
      if (products) {
        res.json({ status: true, products });
      } else {
        res.json({ status: false, message: "No products found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error" });
    }
  };

  module.exports.getProductById = async (req, res) => {
    try {
      const product = await productaddModel.findById(req.params.id);
      if (product) {
        res.json({ status: true, product });
      } else {
        res.json({ status: false, message: "Product not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error" });
    }
  };

  module.exports.updateProfile = async (req, res) => {
    try {
        const { email, username, Phonenumber } = req.body;
        const user = await userModel.findOne({ Emailaddress: email });

        if (!user) {
            return res.json({ message: "User not found", status: false });
        }

        user.username = username;
        user.Phonenumber = Phonenumber;

        await user.save();

        return res.json({
            message: "Profile updated successfully",
            status: true,
        });
    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server error", status: false });
    }
};
  
  