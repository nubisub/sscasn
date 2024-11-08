import { Router, Request, Response } from "express";
import { pendidikan } from "./pendidikan.route";
import { formasi } from "./formasi.route";

const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.json({ message: "API v1.0.0" });
});
router.use("/pendidikan", pendidikan);
router.use("/formasi", formasi);

export default router;
