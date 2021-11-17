const { getCatalogueByIdAndUserId } = require("../services");
const { errorResponse } = require("../utils/errorResponse");

module.exports = async (req, res, next) => {
  try {
    let { id } = req.params;
    if (!id) return errorResponse(req, res, 400, "Book id is required");

    const catalogue = await getCatalogueByIdAndUserId(id, req.user.id);
    if (!catalogue.length) {
      return errorResponse(req, res, 404, "catalogue not found");
    }

    req.catalogue = catalogue[0];
    return next();
  } catch (error) {
    errorResponse(req, res, 500, error.message);
  }
};
