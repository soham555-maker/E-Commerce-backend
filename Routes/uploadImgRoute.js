import { Router } from "express";
import { upload } from "../Middelware/uploadImg.js"
import { uploadImg } from "../Controllers/uploadImgController.js";
import express from "express";

const router = Router();
router.post('/uploadImg',upload.single('product'), uploadImg);
router.use('/images',  express.static('./uploads/images'));

export default router;