const CartItem = require("../Model/cartModel");
const mongoose = require("mongoose");

module.exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  console.log(typeof productId);

  try {
    // console.log("Adding to cart:", { userId, productIds, quantity });

    if (!userId || !productId || !quantity) {
      console.error("Missing required fields");
      return res
        .status(400)
        .json({ message: "Missing required fields", success: false });
    }

    let userCart = await CartItem.findOne({ userId });

    console.log(userCart);

    const isProductExist = await userCart.proIds.find(
      (prodid) => prodid == productId
    );

    if (!isProductExist) {
      // cartItem.proIds.push(productId);
      // await cartItem.save();
      const cartItem = await CartItem.findOneAndUpdate(
        { userId },
        {
          $push: { proIds: productId },
        }
      );

      res.json({
        message: "Item(s) added to cart successfully",
        success: true,
        cartItem,
      });
    } else {
      res
        .status(409)
        .json({ message: "product already carted", success: false });
    }

    // // Check if userId is a valid ObjectId
    // if (!mongoose.Types.ObjectId.isValid(userId)) {
    //   console.error("Invalid userId");
    //   return res
    //     .status(400)
    //     .json({ message: "Invalid userId", success: false });
    // }

    // // Ensure productIds is an array
    // if (
    //   !Array.isArray(productIds) ||
    //   !productIds.every((id) => mongoose.Types.ObjectId.isValid(id))
    // ) {
    //   console.error("Invalid productIds");
    //   return res
    //     .status(400)
    //     .json({ message: "Invalid productIds", success: false });
    // }

    // let cartItem = await CartItem.findOne({ userId });

    // if (cartItem) {
    //   // Add new productIds to the existing ones
    //   cartItem.proIds = [
    //     ...new Set([
    //       ...cartItem.proIds,
    //       ...productIds.map((id) => new mongoose.Types.ObjectId(id)),
    //     ]),
    //   ]; // Convert to ObjectId with new
    //   cartItem.quantity += quantity;
    //   //   console.log('Updating existing cart item:', cartItem);
    // } else {
    //   // If cartItem does not exist, create a new one
    //   cartItem = new CartItem({
    //     userId,
    //     proIds: productIds.map((id) => new mongoose.Types.ObjectId(id)),
    //     quantity,
    //   }); // Convert to ObjectId with new
    //   //   console.log('Creating new cart item:', cartItem);
    // }

    // await cartItem.save();
    // console.log("Item(s) added to cart successfully:", cartItem);
    // await cartItem.save();
    // console.log("Item(s) added to cart successfully:", cartItem);

    // return res.json({
    //   message: "Item(s) added to cart successfully",
    //   success: true,
    //   cartItem,
    // });
  } catch (error) {
    console.error("Error adding item(s) to cart:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

module.exports.getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(400)
        .json({ message: "Invalid userId", success: false });
    }

    const cartItems = await CartItem.findOne({ userId }).populate("proIds");

    if (!cartItems) {
      return res.json({ status: false, message: "No items in the cart" });
    }

    res.json({ status: true, cartItems });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ status: false, message: "Server error" });
  }
};

module.exports.updateCartItem = async (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;

  try {
    const cartItem = await CartItem.findOne({ userId });
    if (!cartItem) {
      return res
        .status(404)
        .json({ message: "Cart not found", success: false });
    }

    const productIndex = cartItem.proIds.indexOf(productId);
    if (productIndex === -1) {
      return res
        .status(404)
        .json({ message: "Product not found in cart", success: false });
    }

    if (quantity > 0) {
      cartItem.quantity = quantity; // Update quantity
    } else {
      cartItem.proIds.splice(productIndex, 1); // Remove product if quantity is 0
      cartItem.quantity -= 1;
    }

    await cartItem.save();
    res.json({ message: "Cart updated successfully", success: true, cartItem });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

module.exports.removeCartItem = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const cartItem = await CartItem.findOne({ userId });
    if (!cartItem) {
      return res
        .status(404)
        .json({ message: "Cart not found", success: false });
    }

    const productIndex = cartItem.proIds.indexOf(productId);
    if (productIndex === -1) {
      return res
        .status(404)
        .json({ message: "Product not found in cart", success: false });
    }

    cartItem.proIds.splice(productIndex, 1); // Remove product
    cartItem.quantity -= 1;

    await cartItem.save();
    res.json({
      message: "Item removed from cart successfully",
      success: true,
      cartItem,
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};
