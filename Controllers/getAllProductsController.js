import allProductsModel from "../Models/allProductsModel.js";

export async function allProductsAdd(req, res){
    let products = await allProductsModel.find({});
    let id;
    if (products.length>0){
        let last_product = products.slice(-1)[0];
        try{
            id = await last_product.id+1;
        }catch(e){
            id=1;
            console.log("last product does not contain an id"+e.message);
        }
    }else{
        id=1;
    };
    const new_product = new allProductsModel({
        id:id,
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    new_product.save();
    res.json(new_product);
}

export async function removeProduct(req, res) {
    try {
        const removedProduct = await allProductsModel.findOneAndDelete({ id: req.body.id }).exec();

        if (removedProduct) {
            res.json({
                success: true,
                product: removedProduct,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}


export async function getAllProducts(req, res) {
    try {
        const allProducts = await allProductsModel.find().exec();

        if (allProducts) {
            res.json({
                success: true,
                products: allProducts,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'No Product Found',
            });
        }
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}
