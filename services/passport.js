const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = (passport) => {

  passport.serializeUser( (user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
// maybe add the boolean here?
  passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        if (email) {
            email = email.toLowerCase();
          } // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            User.findOne({ 'email' :  email }, function(err, user) {
                // if there are any errors, return the error

                if (err) {
                    return done(err);
                }
                // if no user is found, return the message
                if (!user) {
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                }
                hashedPassword = user.password;
                if (!user.validPassword(password, hashedPassword)) {
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                }
                // all is well, return user
                else {
                    return done(null, user);
                }
          });
      });
  }));

  passport.use("local-signup", new LocalStrategy({
    usernameField : "email",
    passwordField : "password",
    passReqToCallback : true
  },
  ( req, email, password, done ) => {
    let { firstName, lastName } = req.body;
    firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1);
    console.log(firstName, lastName);
    if (email) {
      email = email.toLowerCase();
    }
    process.nextTick( () => {
      if (!req.user) {
              User.findOne({ 'email' :  email }, function(err, user) {
                  // if there are any errors, return the error
                  if (err) {
                      return done(err);
                  }

                  // check to see if theres already a user with that email
                  if (user) {
                      return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                  } else {

                      // create the user
                      var newUser            = new User();
                      newUser.firstName = firstName;
                      newUser.lastName = lastName;
                      newUser.email    = email;
                      newUser.password = newUser.generateHash(password);
                      newUser.save(function(err) {
                          if (err)
                              return done(err);
                          return done(null, newUser);
                      });
                  }

              });
          // if the user is logged in but has no local account...
          } else if ( !req.user.email ) {
              // ...presumably they're trying to connect a local account
              // BUT let's check if the email used to connect a local account is being used by another user
              User.findOne({ 'email' :  email }, function(err, user) {
                  if (err) {
                      return done(err);
                  }
                  if (user) {
                      return done(null, false, req.flash('loginMessage', 'That email is already taken.'));
                      // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
                  } else {
                      var user = req.user;
                      user.email = email;
                      user.password = user.generateHash(password);
                      user.save(function (err) {
                          if (err) {
                              return done(err);
                          }

                          return done(null,user);
                      });
                  }
              });
          } else {
              // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
              return done(null, req.user);
          }
    });
  }));
};
