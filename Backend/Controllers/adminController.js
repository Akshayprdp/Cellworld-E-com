const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminModel = require("../Model/adminModel");
const secretKey = "your_secret_key";
const userModel = require("../Model/userModel");
const Product = require("../Model/productaddModel");
const productaddModel = require("../Model/productaddModel");

const adminLogin = async (req, res) => {
  try {
    const { adminUsername, adminPassword } = req.body;

    const admin = await adminModel.findOne({ username: adminUsername });

    if (admin) {
      const isPasswordValid = await bcrypt.compare(
        adminPassword,
        admin.Password
      );
      if (isPasswordValid) {
        const token = jwt.sign({ id: admin._id }, secretKey, {
          expiresIn: "1h",
        });
        return res.json({
          message: "Login successful",
          success: true,
          token,
          username: admin.username,
          Emailaddress: admin.Emailaddress,
          Phonenumber: admin.Phonenumber,
        });
      } else {
        return res.json({ message: "Incorrect password", success: false });
      }
    } else {
      return res.json({ message: "User not found", success: false });
    }
  } catch (error) {
    console.error("Error in admin login:", error);
    return res
      .status(500)
      .json({ message: "An error occurred", success: false });
  }
};

module.exports = {
  adminLogin,
};

module.exports.userList = async (req, res) => {
  try {
    const userlist = await userModel.find();
    if (userlist) {
      res.json({ status: true, userlist });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.productadd = async (req, res) => {
  try {
    const { productName, description, price, category } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ message: "Image file is required", success: false });
    }

    const newProduct = new Product({
      productName,
      description,
      price: parseFloat(price.slice(1)),
      category,
      imageUrl: `/uploads/${req.file.filename}`,
    });

    await newProduct.save();

    return res.json({ message: "Product added successfully", success: true });
  } catch (error) {
    console.error("Error adding product:", error);
    return res
      .status(500)
      .json({ message: "An error occurred", success: false });
  }
};

module.exports.productlist = async (req, res) => {
  try {
    const productlist = await productaddModel.find();
    if (productlist) {
      res.json({ status: true, productlist });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json({ status: true, product });
    } else {
      res.status(404).json({ status: false, message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};


// adminController.js
module.exports.updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (updatedUser) {
      res.json({ success: true, user: updatedUser });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user status:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};




module.exports.updateProduct = async (req, res) => {
  console.log("from update",req.body);
  // try {
  //   const { id } = req.params;
  //   const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
  //   res.status(200).json({ success: true, product: updatedProduct });
  // } catch (error) {
  //   res.status(500).json({ success: false, error: error.message });
  // }
};