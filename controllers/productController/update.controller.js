const prisma = require("../../config/prisma");

const updateInventory = async(req,res)=>{
    try {
        const {id}= req.params;
        const {productName, quantity, price, stock} = req.body;

        const updateProduct = await prisma.inventory.update({
            where:{
                id:parseInt(id),
            },
            data:{
                productName,
                quantity,
                price,
                stock,
            },
        });

        return res.status(200).json({
            message:'inventory updated successfully',
            data:updateProduct,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error updating inventory',
            error:error,
        });
    }
}

module.exports = updateInventory;