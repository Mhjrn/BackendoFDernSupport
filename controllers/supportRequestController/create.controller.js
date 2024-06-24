const prisma = require("../../config/prisma");

const inquiry = async (req, res) => {
  try {
    const { brandName, message } = req.body;
    const userId = req.userId;
    console.log(req.body)

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    
    const saveInquiry = await prisma.inquiry.create({
      data: {
        brand: brandName,
        description:message,
        user:{
          connect:{
              id:parseInt(userId),
          }
      },
      },
    });

    return res.status(200).json({
      message: "inquiry saved successfully",
      data: saveInquiry,
    });
  } catch (error) {
    console.log(error);
   return res.status(500).json({
      message: "error saving inquiry",
      error: error,
    });
  }
};

module.exports = inquiry;
