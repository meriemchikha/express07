const userControllers = require("./Controllers/userControllers");
const express = require("express");
const hashPassword = require("./Middlewares/hashPassword");

const router = express.Router();

router.get("/users", userControllers.getUsers);
router.post("/users", hashPassword, userControllers.addUser);


module.exports = router;
