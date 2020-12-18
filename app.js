
var PORT = process.env.PORT || 5000;
var express = require("express");
var server = express();
server.get("/", (req, res, next) => {
    console.log("some one get manue ");
    res.send("manue : what do you want to get ? food or water !");

})


server.get("/water", (req, res, next) => {
    console.log("some one get manue ");
    res.send("HERE IS WATER");

})
server.get("/jusic", (req, res, next) => {
    console.log("some one get manue ");
    res.send("HERE IS jusic");

})
server.listen(PORT, () => {
    console.log("server is running on port 3000");
})