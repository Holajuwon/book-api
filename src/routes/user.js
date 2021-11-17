const express = require("express");
const router = express.Router();
const {
  createUser,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers");
const {
  createUserShema,
  loginUserSchema,
  resetPassSchema,
  forgotPassSchema,
} = require("../db/schemas/user");
const validateInput = require("../middlewares/requestValidator/validateInput");
const verifyLogin = require("../middlewares/verifyLogin");
const verifySignup = require("../middlewares/verifySignup");
const verifyUser = require("../middlewares/verifyUser");
const { verifyResetToken } = require("../middlewares/verifyToken");

router
  .post(
    "/signup",
    [validateInput(createUserShema, "body"), verifyUser, verifySignup],
    createUser
  )
  .post(
    "/login",
    [validateInput(loginUserSchema, "body"), verifyUser, verifyLogin],
    login
  )
  .post(
    "/forgot_password",
    [validateInput(forgotPassSchema, "body"), verifyUser],
    forgotPassword
  )
  .post(
    "/reset_password/:resetToken",
    [validateInput(resetPassSchema, "body"), verifyResetToken],
    resetPassword
  );

module.exports = router;
