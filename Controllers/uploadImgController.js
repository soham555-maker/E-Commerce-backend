export function uploadImg(req, res){
    res.json({
        sucess:true,
        image_url:`${process.env.ENDPOINT}images/${req.file.filename}`
    })
} 
