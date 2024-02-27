const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Notas");
const Notas = mongoose.model("notas");

// Rota para a página principal
router.get("/", (req, res) => {
    res.render("admin/index");
});

router.get("/a", (req, res) => {
    res.render("admin/indio");
});
router.get("/e", (req, res) => {
    res.render("admin/quilombola");
})
router.get("/quem", (req, res) => {
    res.render("admin/quem");
})
router.get("/adm", (req, res) => {
    res.render("admin/index");
});
module.exports = router;
