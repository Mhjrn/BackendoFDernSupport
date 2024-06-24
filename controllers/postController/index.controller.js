const prisma = require("../../config/prisma");

const getPost = async(req, res) =>{
    try {
        const post = await prisma.post.findMany();

        return res.status(200).json({
            message:'post fetched successfully',
            data:post,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:'error fetching post',
            error:error,
        });
    }
}
module.exports = getPost;
