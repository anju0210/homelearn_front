const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.post('/kakao/signin', userController.signInKakao)

module.exports = router