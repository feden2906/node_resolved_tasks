const router = require('express').Router();

const { signInController } = require('../controller');
const { signInMiddleware } = require('../middleware');

router.get('/', signInController.getFormSignIn);
router.post('/', signInMiddleware.checkUserAuth, signInController.signIn);

module.exports = router;
