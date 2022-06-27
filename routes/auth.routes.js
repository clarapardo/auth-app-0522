const router = require("express").Router();
const User = require("./../models/User.model")

const bcryptjs = require("bcryptjs")
const saltRounds = 10



router.get("/registro", (req, res) => {
    res.render("auth/signup")
})

router.post("/registro", (req, res) => {

    const { username, email, password } = req.body

    console.log("Esto NUNCA debe ir a la BBDD", password)

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashedPwd => User.create({ username, email, password: hashedPwd }))
        .then(() => res.redirect("/"))
        .catch(err => console.log(err))
})



module.exports = router