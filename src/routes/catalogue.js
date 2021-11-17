const express = require("express");
const router = express.Router();

const {
  addCatalogue,
  getUserCatalogue,
  deleteCatalogue,
} = require("../controllers");
const verifyBook = require("../middlewares/verifyBook");
const verifyCatalogue = require('../middlewares/verifyCatalogue');
const { verifyToken } = require("../middlewares/verifyToken");

router
  .get("/", [verifyToken], getUserCatalogue)
  .post("/:id", [verifyToken, verifyBook], addCatalogue)
  .delete("/:id", [verifyToken, verifyCatalogue], deleteCatalogue);

module.exports = router;
