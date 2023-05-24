const express = require("express");

const authControllers = require("../../controllers/auth-controllers");

const {schemas} = require("../../models/user");

const {validateBody} = require("../../utils");

const {authenticate, upload} = require("../../middlewares")

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.userRegisterSchema), authControllers.register);

router.get("/verify/:verificationCode", authControllers.verify);

router.post("/verify", validateBody(schemas.userEmailSchema), authControllers.resendVerifyEmail);

// signin
router.post("/login", validateBody(schemas.userLoginSchema), authControllers.login);

router.get("/current", authenticate, authControllers.getCurrent);

router.post("/logout", authenticate, authControllers.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), authControllers.updateAvatar);
 
module.exports = router;