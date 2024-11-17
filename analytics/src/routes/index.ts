import { Router, Request, Response } from "express";
import { pendidikan } from "./pendidikan.route";
import { formasi } from "./formasi.route";
import { summary } from "./summary.route";
import { jabatan } from "./jabatan.route";
import { instansi } from "./instansi.route";

const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.json({ message: "API v1.0.0" });
});
router.use("/pendidikan", pendidikan);
router.use("/formasi", formasi);
router.use("/summary", summary);
router.use("/jabatan", jabatan);
router.use("/instansi", instansi);

export default router;
