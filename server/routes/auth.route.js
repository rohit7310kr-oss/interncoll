const express = require("express");
const {
  createUser,
  updateUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth.controller");

const authMiddleware = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/allowRoles");

const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(loginUser);

router.route("/logout").post(authMiddleware, logoutUser);

router.use(authMiddleware, allowRoles("user"));

router.route("/:id").patch(updateUser);

module.exports = router;
