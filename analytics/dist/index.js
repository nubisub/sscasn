"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var setupSwagger_1 = require("./config/setupSwagger");
var setupDatabase_1 = require("./config/setupDatabase");
var dotenv_1 = __importDefault(require("dotenv"));
var CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
var app = (0, express_1.default)();
dotenv_1.default.config();
(0, setupDatabase_1.setupDatabase)();
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.json({ message: "API v1.0.0" });
});
app.use("/api", routes_1.default);
app.use("/api-docs", setupSwagger_1.swaggerUi.serve, setupSwagger_1.swaggerUi.setup(setupSwagger_1.specs, { customCssUrl: CSS_URL }));
var PORT = process.env.PORT || 3000;
app.listen(3000, function () {
    console.log("Server Started at http://localhost:".concat(PORT));
});
module.exports = app;
