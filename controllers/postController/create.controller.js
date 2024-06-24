const prisma = require("../../config/prisma");

const post= async(req, res)=>{
    try {
        const {title,description} = req.body;
       console.log(req.body)
        const savePost = await prisma.post.create({
            data:{
                title,
                content:description,
            }
        });

        return res.status(200).json({
            message:'post saved successfully',
            data:savePost,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:'error saving post',
            error:error,
        })
    }
}

module.exports = post;