exports.isLoggedIn = (req, res, next) => {

// Contoh
  const loggedIn = true;

  if (!loggedIn) {
      return res.redirect('/login');

  }
  next();

}