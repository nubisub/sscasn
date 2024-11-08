import { Pendidikan } from "../models/pendidikan.model";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
	try {
		const page = Math.max(parseInt(req.query.page as string) || 1, 1);
		let limit = Math.max(parseInt(req.query.limit as string) || 10, 1);
		const total_pages = Math.ceil((await Pendidikan.countDocuments()) / limit);
		if (limit > 100) limit = 100;
		const offset = (page - 1) * limit;
		const pendidikan = await Pendidikan.find().skip(offset).limit(limit);
		const pagination = {
			current_page: page,
			per_page: limit,
			total_pages: total_pages,
			total_items: await Pendidikan.countDocuments(),
			links: {
				next_page_url:
					page * limit < (await Pendidikan.countDocuments())
						? `${process.env.API_URL}/pendidikan?page=${
								page + 1
						  }&limit=${limit}`
						: null,
				previous_page_url:
					page > 1
						? `${process.env.API_URL}/pendidikan?page=${
								page - 1
						  }&limit=${limit}`
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
			data: pendidikan,
			pagination: pagination,
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

export const getById = async (req: Request, res: Response) => {
	try {
		const pendidikan = await Pendidikan.find({
			tk_pend: req.params.id,
		});
		if (!pendidikan) {
			res.status(404).json({
				status: "success",
				code: 200,
				message: "Data not found",
				data: null,
				errors: null,
			});
			return;
		}
		res.json({
			status: "success",
			code: 200,
			message: "Data retrieved successfully",
			data: pendidikan,
			errors: null,
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
			code: (error as any).code || 500,
			message: "Internal Server Error",
			data: null,
		});
	}
};
