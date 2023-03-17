const express = require("express");

const router = express();

//rotas
router.get("/", (req, res) => {
    res.send("API working...");
})


module.exports = router;
