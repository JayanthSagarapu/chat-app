const express = require("express");

const chatControllers = require("../controllers/chats");

const router = express.Router();

router.get("/contactus", chatControllers.getContactus);

router.post("/products", chatControllers.postContactus);

module.exports = router;
