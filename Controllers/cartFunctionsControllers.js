import UsersModel from "../Models/allUsersModel.js";

export const addtocart = async (req, res) => {
    console.log(req.logedin);
    if (req.logedin) {
        try {
            const userId = req.user.id;
            const productId = req.body.productId;
            // Get the user by ID
            const user = await UsersModel.findOne({ _id: userId });

            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            // Update the cart in the user model based on your frontend logic
            // For example, incrementing the count for the given product ID
            user.cart[productId] += 1;

            // Save the updated user model
            await UsersModel.findOneAndUpdate({ _id: userId }, { cart: user.cart });

            console.log(user);

            return res.json({ success: true, message: "Added to cart successfully" });
        } catch (error) {
            console.error("Error adding to cart:", error);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    } else {
        // return res.json({ success: false, message: "Login authentication failed" });
    }
};

export const removefromcart = async (req, res) => {
    try {
        const userId = req.user.id;
        const productId = req.body.productId;

        // Get the user by ID
        const user = await UsersModel.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update the cart in the user model based on your frontend logic
        // For example, decrementing the count for the given product ID
        if (user.cart[productId] > 0) {
            user.cart[productId] -= 1;

            // Save the updated user model
            await UsersModel.findOneAndUpdate({ _id: userId }, { cart: user.cart });

            console.log(user);

            return res.json({ success: true, message: "Removed from cart successfully" });
        } else {
            return res.status(400).json({ success: false, message: "Product count in cart is already 0" });
        }
    } catch (error) {
        console.error("Error removing from cart:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const getcart = async (req, res) => {
    try {
        let user = await UsersModel.findOne({ _id: req.user.id });
        return res.json({ success: true, cart: user.cart });
    } catch (error) {
        console.error("Error getting cart:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
