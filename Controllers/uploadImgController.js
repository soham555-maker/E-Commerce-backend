export function uploadImg(req, res){
    res.json({
        sucess:true,
        image_url:`http://localhost:4000/images/${req.file.filename}`
    })
} 
