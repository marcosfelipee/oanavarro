const { Router } = require('express');
const authController = require('../controllers/auth-controller')

const router = new Router();

router.post("/", authController.login);

module.exports = router;