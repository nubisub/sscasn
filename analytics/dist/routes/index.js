"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pendidikan_route_1 = require("./pendidikan.route");
var formasi_route_1 = require("./formasi.route");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.json({ message: "API v1.0.0" });
});
router.use("/pendidikan", pendidikan_route_1.pendidikan);
router.use("/formasi", formasi_route_1.formasi);
exports.default = router;
