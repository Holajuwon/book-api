const {
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
} = require("../services");
const { errorResponse } = require("../utils/errorResponse");
const { successResponse } = require("../utils/successResponse");

module.exports = {
  addCatalogue: async (req, res) => {
    try {
      const { id: userId } = req.user;
      const { id: bookId } = req.book;
      const catalogue = await addCatalogue(bookId, userId);
      return successResponse(
        res,
        201,
        "book added to catalogue successfully",
        catalogue
      );
    } catch (error) {
      console.log(error.message);
      return errorResponse(req, res, 500);
    }
  },
  getUserCatalogue: async (req, res) => {
    try {
      const { id } = req.user;
      const catalogue = await getUserCatalogue(id);
      return successResponse(
        res,
        200,
        "catalogue retrieved successfully",
        catalogue
      );
    } catch (error) {
      console.log(error.message);
      return errorResponse(req, res, 500);
    }
  },
  deleteCatalogue: async (req, res) => {
    try {
      const { id } = req.catalogue;

      const catalogue = await deleteCatalogue(id);
      return successResponse(
        res,
        200,
        "book deleted from catalogue successfully",
        catalogue
      );
    } catch (error) {
      return errorResponse(req, res, 500, error.message);
    }
  },
};
