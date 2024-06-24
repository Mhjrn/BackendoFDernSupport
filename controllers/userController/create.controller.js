
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../config/prisma');


const login = async(req,res) =>{
    try {
        const {name, email, password, userType} =req.body;


        //checking email validation

        const checkEmail = await prisma.user.findUnique({
            where:{
                email,
            }
        });
        
        if(checkEmail){
            return res.status(400).json({
                message:'email already exists',
            });
        };

        //hasing password

        const salt = await bcrypt.genSalt(10);

        const hashesPassword = await bcrypt.hash(password, salt);

        const saveData = await prisma.user.create({
            data:{
                name,
                email,
                password:hashesPassword,
                userType:userType
                

            }
        });
        

        const accessToken = jwt.sign(
            {
                id:saveData.id,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:'1d',
            }
        )

        return res.status(201).json({
            message:'user created successfully',
            data:saveData,
            accessToken,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error creating user',
            error:error,
        });
    }
}

module.exports = login;