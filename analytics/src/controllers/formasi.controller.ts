import { Formasi } from "../models/formasi.model";
import { Request, Response } from "express";
export const getAll = async (req: Request, res: Response) => {
	try {
		const page = Math.max(parseInt(req.query.page as string) || 1, 1);
		let limit = Math.max(parseInt(req.query.limit as string) || 10, 1);
		const instansi_kode = req.query.instansi_kode as string;
		const jabatan_kode = req.query.jabatan_kode as string;
		const pendidikan_kode = req.query.pendidikan_kode as string;
		const min_gaji = req.query.min_gaji as string;
		const max_gaji = req.query.max_gaji as string;
		const sort_by = (req.query.sort_by as string) || "jumlah_formasi";
		const sort_order = (req.query.sort_order as string) || "desc";
		const search = req.query.search as string;

		const query: any = {};
		const sort: any = {};
		sort[sort_by] = sort_order === "asc" ? 1 : -1;
		if (instansi_kode) {
			query.instansi_id = instansi_kode;
		}
		if (jabatan_kode) {
			query.jabatan_kd = jabatan_kode;
		}
		if (pendidikan_kode) {
			const regexPendidikan = new RegExp(`\\b${pendidikan_kode}\\b`);
			query.kode_ref_pend = regexPendidikan;
		}
		if (min_gaji) {
			query.gaji_min = { $gte: parseInt(min_gaji) };
		}
		if (max_gaji) {
			query.gaji_max = { $lte: parseInt(max_gaji) };
		}
		if (search) {
			const regexSearch = new RegExp(search, "i");
			query.$or = [
				{ ins_nm: regexSearch },
				{ jabatan_nm: regexSearch },
				{ lokasi_nm: regexSearch },
				{ pendidikan_nm: regexSearch },
			];
		}

		if (limit > 100) limit = 100;
		const offset = (page - 1) * limit;
		const formasi = await Formasi.find(query)
			.select(
				"-_id formasi_id ins_nm jabatan_nm lokasi_nm pendidikan_nm jumlah_formasi jumlah_ms gaji_min gaji_max"
			)
			.sort(sort)
			.limit(limit)
			.skip(offset);

		const total_items = await Formasi.countDocuments(query);
		const total_pages = Math.ceil(total_items / limit);

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
