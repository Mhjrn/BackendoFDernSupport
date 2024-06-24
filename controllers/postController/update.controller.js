const prisma = require("../../config/prisma");

const updatePost = async(req, res) =>{
    try {
        const {id}= req.params;
        const {title, content}= req.body;

        const saveUpdatePost = await prisma.post.update({
            where: {
                id:parseInt(id),
            },
            data:{
                title,
                content,
            }
        })
        return res.status(200).json({
            message:'post updated successfully',
            data:saveUpdatePost,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:'error updating post',
            error:error,
        });
    }
}


module.exports = updatePost;