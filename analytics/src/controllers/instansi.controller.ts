import { Formasi } from "../models/formasi.model";
import { Request, Response } from "express";
export const getAll = async (req: Request, res: Response) => {
	const page = req.query.page ? parseInt(req.query.page as string) : 1;
	const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
	const skip = (page - 1) * limit;

	try {
		const instansiData = await Formasi.aggregate([
			{
				$group: {
					_id: "$instansi_id",
					nama: { $first: "$ins_nm" },
				},
			},
			{
				$addFields: { kode: "$_id" },
			},
			{
				$sort: { nama: 1 },
			},
			{
				$skip: skip,
			},
			{
				$limit: limit,
			},
			{
				$project: {
					_id: 0,
					kode: 1,
					nama: 1,
				},
			},
		]);

		const totalData = await Formasi.distinct("jabatan_nm").then(
			(data) => data.length
		);
		const totalPage = Math.ceil(totalData / limit);

		const pagination = {
			page,
			limit,
			total_page: totalPage,
			total_data: totalData,
			links: {
				previous:
					page > 1
						? `${process.env.API_URL}/summary/jabatan?page=${
								page - 1
						  }&limit=${limit}`
						: null,
				next:
					page * limit < totalData
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
			data: instansiData,
			pagination,
			errors: null,
		});
	} catch (error: unknown) {
		console.error(error); // Log error for debugging
		res.json({
			status: "error",
			code: (error as any).code || 500,
			message: (error as Error).message || "Internal Server Error",
			data: null,
		});
	}
};
