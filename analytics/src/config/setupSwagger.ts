import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

dotenv.config();
const options = {
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
swaggerUi.setup;
const specs = swaggerJSDoc(options);
export { specs, swaggerUi };
