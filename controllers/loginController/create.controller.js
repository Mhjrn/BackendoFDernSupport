const prisma = require("../../config/prisma");

 
 const login = async(req, res)=>{
    try {
        const {email, password} = req.body;

        const checkingEmail = await prisma.user.findUnique({
            where:{
                email:email,
            }
        });

        if(!checkingEmail){
            return res.status(404).json({
                message:'user not found',
            })
        };

        const checkpassword = await bcrypt.compare(password,checkingEmail.password);

        if(!checkpassword){
        return res.status(400).json({
            message:'invalid password',
        })
        }

        const accessToken = jwt.sign(
            {
                id:checkingEmail.id,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:'1d',
            }
        );

        return res.status(200).json({
            message:'user logged in successfully',
            data:checkingEmail,checkpassword,
            accessToken,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message:'error logging in',
            error:error,
        })
    }
 }

 module.exports = login;