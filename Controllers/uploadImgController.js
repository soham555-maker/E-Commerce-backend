import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dlzvtfawz', 
  api_key: '922627717362664', 
  api_secret: '2eygA9J0L9mWzDhZZgawuBcaukw' 
});

export function uploadImg(req, res){
    console.log(req.file)
    cloudinary.uploader.upload(req.file.path, function(err, result){
        if(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message: err
            })
        }

        res.status(200).json({
                sucess:true,
                image_url:result.url
    })
})}

    // res.json({
    //     sucess:true,
    //     image_url:`${process.env.ENDPOINT}images/${req.file.filename}`
    // })

