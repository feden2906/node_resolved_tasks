module.exports = {
  getFormSignIn: (req, res) => {
    res.render('signIn');
  },

  signIn: ({ user }, res) => {
    res.redirect(`/users/${user.id}`);
  }
};
