const User = require("../models/User");
const Devices = require("../models/Device");

module.exports = (app) => {
  app.get("/api/users", (req, res) => {
    User.find({}).then((users) => {
     res.send(users);
    });
  });

  app.post("/api/addnewdevice", (req, res) => {
    console.log(req.body);
    res.send(req.body);
  })


}
