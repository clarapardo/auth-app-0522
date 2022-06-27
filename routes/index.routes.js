const router = require("express").Router()

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
})

//Auth routes
router.use("/", require("./auth.routes"))



module.exports = router
