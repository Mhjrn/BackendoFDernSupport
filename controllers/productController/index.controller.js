const prisma = require("../../config/prisma")

const getProduct = async(req, res) =>{
    try {
        const product = await prisma.inventory.findMany();

        return res.status(200).json({
            message:'inventory fetched successfully',
            data:product,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error fetching inventory',
            error:error,
        });
    }
}


module.exports = getProduct