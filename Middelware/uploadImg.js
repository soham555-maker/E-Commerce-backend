import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: './uploads/images',
    filename:(req, file, cb)=>{
        return cb(null, `${file.originalname}_${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
export const upload = multer({storage:storage});

