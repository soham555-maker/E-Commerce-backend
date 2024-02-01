import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: './uploads/images',
    filename:(req, file, cb)=>{
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})
export const upload = multer({storage:storage});

