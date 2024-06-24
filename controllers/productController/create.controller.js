const prisma = require("../../config/prisma");

const product= async(req, res)=>{
    try {
        const {productName, quantity, price, stock} = req.body;
       console.log(req.body)
        const saveProduct = await prisma.inventory.create({
            data:{
                name:productName,
                quantity,
                price,
                stock,
            }
        });

        return res.status(200).json({
            message:'inventory saved successfully',
            data:saveProduct,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:'error saving inventory',
            error:error,
        })
    }
}

module.exports = product;