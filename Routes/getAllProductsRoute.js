import { Router } from "express";
import { allProductsAdd, getAllProducts, removeProduct } from "../Controllers/getAllProductsController.js";
const router = Router();
router.post("/allProductsAdd", allProductsAdd);
router.post("/removeProduct", removeProduct);
router.get("/getAllProducts", getAllProducts);

export default router;