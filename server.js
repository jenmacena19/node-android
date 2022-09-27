var express = require("express");
var app = express();
var usb = require("usb");

app.get("/url", (req, res, next) => {
  res.json(["Tonny", "Lisa", "Jenny", "Bea"]);
});

app.get("/usb", (req, res, next) => {
  var listUsb = usb.getDeviceList();
  res.json(listUsb);
});

app.listen(3000, () => {
  console.log("Runnin in port 3000");
});
