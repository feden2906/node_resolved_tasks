const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId',
    userMiddleware.isUserIdValid,
    userMiddleware.isUserExist,
    userController.getUserById
);
router.post('/:userId',
    userMiddleware.isUserIdValid,
    userController.deleteUserById);

module.exports = router;
