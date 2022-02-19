const users = require('../db/users');

module.exports = {
  isUserIdValid: (req, res, next) => {
    try {
      const { userId } = req.params;

      if (!Number.isInteger(+userId) || Number.isNaN(+userId)) {
        throw new Error('Not valid ID!');
      }

      const user = users.find(user => user.id === +userId);
      if (!user) throw new Error(`User with ID: ${userId} exist!`);

      req.user = user;
      next();
    } catch ({ message }) {
      res.redirect(`/error?error=${message}`);
    }
  },

  isUserDataValid: (req, res, next) => {
    try {
      const {firstName, lastName, email, password, age, city} = req.body;

      if (firstName.length < 2 || lastName.length < 2) {
        throw new Error('firstName and lastName mast be min 2 sumbols');
      }

      if (!email.includes('@')) {
        throw new Error('Not valid email address!');
      }

      if (password.length < 6) {
        throw new Error('Not valid password');
      }

      if (age < 18) {
        throw new Error('Not valid age. Min 18');
      }

      if (!city) {
        throw new Error('Not valid city');
      }

      next();
    } catch ({ message }) {
      res.redirect(`/error?error=${message}`);
    }
  },

  isUserExist: ({ body }, res, next) => {
    try {
      const userExist = users.some(user => user.email === body.email);
      if (userExist) throw new Error('User with this email exist!');

      next();
    } catch ({ message }) {
      res.redirect(`/error?error=${message}`);
    }
  }
};
