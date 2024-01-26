export function uploadImg(req, res){
    res.json({
        sucess:true,
        image_url:`https://e-commerce-backend-dw6l.onrender.com/images/${req.file.filename}`
    })
} 
