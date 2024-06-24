const prisma = require("../../config/prisma")

const getRepair = async(req, res) =>{
    try {
        const repair = await prisma.repair.findMany();

         return res.status(200).json({
            message:'repair fetched successfully',
            data:repair,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error fetching repair',
            error:error,
            
        });
    }
}
 module.exports = getRepair;