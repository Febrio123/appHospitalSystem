exports.isLoggedIn = (req, res, next) => {

// Contoh
  const loggedIn = false;

  if (!loggedIn) {
      return res.redirect('/login');
      
  }
  next();

}