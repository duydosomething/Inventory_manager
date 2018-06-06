

module.exports = (app, passport) => {

  // app.get("/auth/login", passport.authenticate("local", {
  //     scope: ["email"]
  //   }));
  app.get("/", (req, res) => {
    res.send("hello");
  })

  app.post("/auth/login", passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/auth",
    failureFlash : true
  }));

  app.post("/auth/register", passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/auth",
    failureFlash : true
  }));

  app.get("auth/current_user", (req, res) =>{
    res.send(req.user);
  })
}
