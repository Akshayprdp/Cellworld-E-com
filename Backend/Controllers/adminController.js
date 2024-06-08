const userModel=require('../Model/userModel')




module.exports.userList = async (req, res) => {
    try {
      const userlist = await userModel.find();
      if (userlist) {
        return res.json({ status: true, userlist });
      } else {
        return res.json({ status: false, message: "No users found" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: false, message: "Error fetching users" });
    }
  };