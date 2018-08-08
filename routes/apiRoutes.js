const User = require("../models/User");
const Device = require("../models/Device");

module.exports = (app) => {
  app.get("/api/users", (req, res) => {
    User.find({}).then((users) => {
     res.send(users);
    });
  });

  app.post("/api/addnewdevice", (req, res) => {
    const { sku, uid, serialNumber, deviceCategory, owner  } = req.body;
    let comment = "";
    if (req.body.comment ){
      comment = req.body.comment;
    }
    const device = new Device({
      sku,
      uid,
      serialNumber,
      deviceCategory,
      owner,
      comment: comment
    });
    device.save();
  })


}
