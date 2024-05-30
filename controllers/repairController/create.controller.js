const prisma = require("../../config/prisma");

const repair = async(req, res) =>{
    try {
        const{ productname,price, userId}= req.body;
        const scheduleDate = Date.now();

        const saveRepair = await prisma.repair.create({
            data:{
                productname,
                price,            
                user:{
                    connect:{
                        id:parseInt(userId),
                    }
                },
                scheduledDate: new Date(scheduleDate).toISOString(),

            }
        });

        return res.status(201).json({
            message:'repair created successfully',
            data:saveRepair,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error creating repair',
            error:error,
        });
    }
}

module.exports = repair;