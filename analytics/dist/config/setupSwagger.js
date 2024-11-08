"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUi = exports.specs = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SSCASN API Documentation",
            version: "1.0.0",
            description: "A simple Express API with Swagger documentation",
        },
        servers: [
            {
                url: process.env.API_URL || "http://localhost:3000/api",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};
swagger_ui_express_1.default.setup;
var specs = (0, swagger_jsdoc_1.default)(options);
exports.specs = specs;
