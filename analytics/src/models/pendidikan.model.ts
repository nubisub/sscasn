import mongoose from "mongoose";

export interface IPendidikan extends mongoose.Document {
	tk_pend: string;
	kode_pend: string;
	nama_pend: string;
}

export interface PendidikanDocument extends IPendidikan, mongoose.Document {}

const pendidikanSchema = new mongoose.Schema({
	tk_pend: {
		type: String,
		required: true,
	},
	kode_pend: {
		type: String,
		required: true,
	},
	nama_pend: {
		type: String,
		required: true,
	},
});

export const Pendidikan = mongoose.model<PendidikanDocument>(
	"Pendidikan",
	pendidikanSchema
);
