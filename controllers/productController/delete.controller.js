const prisma = require("../../config/prisma");

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.inventory.delete({
      where: { id: parseInt(id) }, // Adjust based on your primary key type
    });

    return res.status(200).json({
      message: 'Product deleted successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error deleting product',
      error: error,
    });
  }
};

module.exports = deleteProduct;
