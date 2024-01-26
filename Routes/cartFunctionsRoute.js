import { Router } from "express";
import authenticateToken from "../Middelware/authentication.js";
import { addtocart, removefromcart, getcart } from "../Controllers/cartFunctionsControllers.js";

const router = Router();

// Route to add to cart
router.post("/addtocart", authenticateToken, addtocart);

// Route to remove from cart
router.post("/removefromcart", authenticateToken, removefromcart);

router.post("/getcart", authenticateToken, getcart )

export default router;
