const CartItem = require("../Model/cartModel");
const mongoose = require("mongoose");

module.exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "Missing required fields", success: false });
    }

    let userCart = await CartItem.findOne({ userId });

    if (!userCart) {
      userCart = new CartItem({ userId, proIds: [productId], quantity });
      await userCart.save();
    } else {
      const isProductExist = userCart.proIds.includes(productId);

      if (isProductExist) {
        return res.status(409).json({ message: "Product already in cart", success: false });
      }

      userCart.proIds.push(productId);
      await userCart.save();
    }

    res.json({ message: "Item(s) added to cart successfully", success: true, cartItem: userCart });
  } catch (error) {
    console.error("Error adding item(s) to cart:", error);
    res.status(500).json({ message: "Server error", success: false });
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
