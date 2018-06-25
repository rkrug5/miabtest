const router = require("express").Router();
const userRoutes = require("./user");
const messageRoutes = require("./message")

// Book routes
router.use("/user", userRoutes);

module.exports = router;
