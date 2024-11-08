import { Formasi } from "../models/formasi.model";
import { Request, Response } from "express";
import { query, validationResult } from "express-validator";
export const getAll = async (req: Request, res: Response) => {
	try {
		const page = Math.max(parseInt(req.query.page as string) || 1, 1);
		let limit = Math.max(parseInt(req.query.limit as string) || 10, 1);
		const total_pages = Math.ceil((await Formasi.countDocuments()) / limit);
		if (limit > 100) limit = 100;
		const offset = (page - 1) * limit;
		const formasi = await Formasi.find().skip(offset).limit(limit);
		const pagination = {
			current_page: page,
			per_page: limit,
			total_pages: total_pages,
			total_items: await Formasi.countDocuments(),
			links: {
				next_page_url:
					page * limit < (await Formasi.countDocuments())
						? `${process.env.API_URL}/formasi?page=${page + 1}&limit=${limit}`
						: null,
				previous_page_url:
					page > 1
						? `${process.env.API_URL}/formasi?page=${page - 1}&limit=${limit}`
						: null,
			},
		};

		res.json({
			status: "success",
			code: 200,
			message:
				page > total_pages
					? "No data available for the requested page"
					: "Data retrieved successfully",
			data: formasi,
			pagination: pagination,
			errors: null,
		});
	} catch (error) {
		//
		res.json({
			status: "error",
			code: (error as any).code || 500,
			message: "Internal Server Error",
			data: null,
		});
	}
};

export const getById = async (req: Request, res: Response) => {
	try {
		const formasi = await Formasi.findOne({
			formasi_id: req.params.id,
		});

		if (!formasi) {
			res.status(404).json({
				status: "error",
				code: 404,
				message: "Formasi not found",
				data: null,
				errors: "Formasi not found",
			});
			return;
		}

		res.json({
			status: "success",
			code: 200,
			message: "Data retrieved successfully",
			data: formasi,
			errors: null,
		});
	} catch (error) {
		res.json({
			status: "error",
			code: (error as any).code || 500,
			message: "Internal Server Error",
			data: null,
		});
	}
};

// export const getTopTenByJabatan = async (req: Request, res: Response) => {
// 	try {
// 		const formasi = await Formasi.aggregate([
// 			{
// 				$group: {
// 					_id: "$jabatan_nm",
// 					total: { $sum: "$jumlah_formasi" },
// 				},
// 			},
// 			{
// 				$sort: { total: -1 },
// 			},
// 			{
// 				$limit: 10,
// 			},
// 			{
// 				$project: {
// 					_id: 0,
// 					jabatan_nm: "$_id",
// 					total: 1,
// 				},
// 			},
// 		]);
// 		res.json({
// 			status: "success",
// 			code: 200,
// 			message: "Data retrieved successfully",
// 			data: formasi,
// 			errors: null,
// 		});
// 	} catch (error) {
// 		res.json({
// 			status: "error",
// 			code: (error as any).code || 500,
// 			message: "Internal Server Error",
// 			data: null,
// 		});
// 	}
// };
