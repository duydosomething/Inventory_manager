const passport = require("passport");

module.exports = (app, passport) => {

  app.get("/auth/login", passport.authenticate("local", {
      scope: ["email"]
    });

  app.post("/auth/register", passport.authenticate("local-signup", {
      successRedirect: "/",
      //failureRedirect: "/signup",
      failureFlash : true
    }));
  }
