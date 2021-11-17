const { errorResponse } = require("../../utils/errorResponse");

// Authorization
exports.adminAuthorization = async (req, res, next) => {
  try {
    const { role } = req.user;
    //Authorize role to only admin and superadmin
    if (!role || role === "user") {
      return errorResponse(
        req,
        res,
        401,
        "You don't have privilege to access this route"
      );
    }

    next();
  } catch (error) {
    errorResponse(req, res);
  }
};
