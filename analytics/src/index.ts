import express from "express";
import routes from "./routes";
import { specs, swaggerUi } from "./config/setupSwagger";
import { setupDatabase } from "./config/setupDatabase";
import dotenv from "dotenv";
const CSS_URL =
	"https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.min.css";
const app = express();
dotenv.config();
setupDatabase();
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "API v1.0.0" });
});
app.use("/api", routes);
app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(specs, { customCssUrl: CSS_URL })
);
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
	console.log(`Server Started at http://localhost:${PORT}`);
});

module.exports = app;
