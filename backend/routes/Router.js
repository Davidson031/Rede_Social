const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));
router.use("/api/photos", require("./PhotoRoutes"));

//rotas
router.get("/", (req, res) => {
    res.send("API working...");
})


module.exports = router;
