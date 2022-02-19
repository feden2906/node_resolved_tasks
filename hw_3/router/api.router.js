const router = require('express').Router();

const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const signInRouter = require('./signIn.router');

router.use('/login', loginRouter);
router.use('/users', userRouter);
router.use('/signIn', signInRouter);

router.get('/error', ({ query }, res) => {
  res.render('error', { error: query.error });
});
router.use((req, res) => {
  res.render('notFound');
});

module.exports = router;
