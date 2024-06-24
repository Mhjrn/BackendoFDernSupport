const prisma = require("../../config/prisma")

const getInquiry = async(req, res) =>{
    try {
        const inquiry = await prisma.inquiry.findMany();

        return res.status(200).json({
            message:'inquiry fetched successfully',
            data:inquiry,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error fetching inquiry',
            error:error,
        });
    }
}


module.exports = getInquiry