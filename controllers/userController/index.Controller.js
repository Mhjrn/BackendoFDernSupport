const prisma = require("../../config/prisma");

const getLogin = async(req, res)=>{
    try {
        const user = await prisma.user.findMany();

        return res.status(200).json({
            message:'user fetched successfully',
            data:user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error fetching user',
            error:error,
        });
    }
}

module.exports = getLogin;