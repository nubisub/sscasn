import { Formasi } from "../models/formasi.model";
import { Request, Response } from "express";

export const jabatanSummary = async (req: Request, res: Response) => {
	const page = parseInt(req.query.page as string) || 1;
	const sort_by = (req.query.sort_by as string) || "jumlah_formasi";
	const sort_order = (req.query.sort_order as string) || "desc";
	const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
	const skip = (page - 1) * limit;

	try {
		const basePipeline: any[] = [
			{
				$group: {
					_id: "$jabatan_nm",
					jumlah_formasi: { $sum: "$jumlah_formasi" },
					jumlah_pelamar: { $sum: "$jumlah_ms" },
					gaji_min: { $min: "$gaji_min" },
					gaji_max: { $max: "$gaji_max" },
					gaji_min_avg: { $avg: "$gaji_min" },
					gaji_max_avg: { $avg: "$gaji_max" },
				},
			},
			{
				$sort: { [sort_by]: sort_order === "asc" ? 1 : -1 },
			},
		];

		const countResult = await Formasi.aggregate([
			...basePipeline,
			{ $count: "total" },
		]);

		const total_data = countResult.length > 0 ? countResult[0].total : 0;
		const total_page = Math.ceil(total_data / limit);

		const pipeline = [
			...basePipeline,
			...(limit !== Infinity ? [{ $skip: skip }, { $limit: limit }] : []),
			{
				$project: {
					_id: 0,
					nama: "$_id",
					jumlah_formasi: 1,
					gaji_min: 1,
					gaji_max: 1,
					gaji_min_avg: 1,
					gaji_max_avg: 1,
					jumlah_pelamar: 1,
				},
			},
		];

		const formasi = await Formasi.aggregate(pipeline);

		const pagination = {
			page,
			limit,
			total_page,
			total_data,
			links: {
				previous:
					page > 1
						? `${process.env.API_URL}/summary/jabatan?page=${
								page - 1
						  }&limit=${limit}`
						: null,
				next:
					page * limit < total_data
						? `${process.env.API_URL}/summary/jabatan?page=${
								page + 1
						  }&limit=${limit}`
						: null,
			},
		};

		res.json({
			status: "success",
			code: 200,
			message: "Data retrieved successfully",
			data: formasi,
			pagination,
			errors: null,
		});
	} catch (error: unknown) {
		console.error(error); // Log error for debugging
		res.status(500).json({
			status: "error",
			code: (error as any).code || 500,
			message: (error as Error).message || "Internal Server Error",
			data: null,
		});
	}
};


export const instansiSummary = async (req: Request, res: Response) => {
	const page = parseInt(req.query.page as string) || 1;
	const limit = req.query.limit
		? parseInt(req.query.limit as string)
		: Infinity;
	const skip = (page - 1) * (limit !== Infinity ? limit : 0);
	const sort_by = (req.query.sort_by as string) || "jumlah_formasi";
	const sort_order = (req.query.sort_order as string) || "desc";
	try {
		const basePipeline: any[] = [
			{
				$group: {
					_id: "$ins_nm",
					jumlah_formasi: { $sum: "$jumlah_formasi" },
					jumlah_pelamar: { $sum: "$jumlah_ms" },
					gaji_min: { $min: "$gaji_min" },
					gaji_max: { $max: "$gaji_max" },
					gaji_min_avg: { $avg: "$gaji_min" },
					gaji_max_avg: { $avg: "$gaji_max" },
				},
			},
			{
				$sort: { [sort_by]: sort_order === "asc" ? 1 : -1 },
			},
		];

		// Create a pipeline for counting the total number of grouped documents
		const countPipeline = [...basePipeline, { $count: "total" }];
		const countResult = await Formasi.aggregate(countPipeline);
		const total_data = countResult.length > 0 ? countResult[0].total : 0;
		const total_page = limit !== Infinity ? Math.ceil(total_data / limit) : 1;

		// Add pagination to the original pipeline
		const pipeline = [...basePipeline];
		if (limit !== Infinity) {
			pipeline.push({ $skip: skip }, { $limit: limit });
		}

		pipeline.push({
			$project: {
				_id: 0,
				nama: "$_id",
				jumlah_formasi: 1,
				jumlah_pelamar: 1,
				gaji_min: 1,
				gaji_max: 1,
				gaji_min_avg: 1,
				gaji_max_avg: 1,
				gaji_avg: 1,
			},
		});

		const formasi = await Formasi.aggregate(pipeline);
		const pagination = {
			page: page,
			limit: limit,
			total_page: total_page,
			total_data: total_data,
			links: {
				previous:
					page > 1
						? `${process.env.API_URL}/summary/instansi?page=${
								page - 1
						  }&limit=${limit}`
						: null,
				next:
					page * limit < total_data
						? `${process.env.API_URL}/summary/instansi?page=${
								page + 1
						  }&limit=${limit}`
						: null,
			},
		};

		res.json({
			status: "success",
			code: 200,
			message: "Data retrieved successfully",
			data: formasi,
			pagination: pagination,
			errors: null,
		});
	} catch (error: unknown) {
		res.json({
			status: "error",
			code: (error as any).code || 500,
			message: (error as Error).message || "Internal Server Error",
			data: null,
		});
	}
};
