"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formasi = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var SyaratAdminSchema = new mongoose_1.default.Schema({
    syarat: { type: String, required: true },
    is_mandatory: { type: Boolean, required: true },
});
var FormasiSchema = new mongoose_1.default.Schema({
    formasi_id: { type: String, required: true },
    mpi_id: { type: String, required: true },
    instansi_id: { type: String, required: true },
    ins_kd: { type: String, required: true },
    ins_nm: { type: String, required: true },
    pengadaan_kd: { type: String, required: true },
    jp_nama: { type: String, required: true },
    formasi_nm: { type: String, required: true },
    jabatan_kd: { type: String, required: true },
    jabatan_nm: { type: String, required: true },
    lokasi_nm: { type: String, required: true },
    pendidikan_nm: { type: String, required: true },
    jumlah_formasi: { type: Number, required: true },
    DISABLE: { type: Boolean, required: true },
    group_tk_pendidikan_id: { type: String, required: false },
    kode_ref_pend: { type: String, required: true },
    job_desc: { type: String, required: true },
    keahlian: { type: String, required: true },
    gaji_min: { type: Number, required: true },
    gaji_max: { type: Number, required: true },
    link_web_instansi: { type: String, required: true },
    call_center_instansi: { type: String, required: true },
    medsos_instansi: { type: String, required: true },
    helpdesk_instansi: { type: String, required: true },
    syarat_admin: [SyaratAdminSchema],
    update_time: { type: Date, required: true },
    jenis_formasi_id: { type: String, required: true },
    jumlah_ms: { type: Number, required: true },
});
exports.Formasi = mongoose_1.default.model("Formasi", FormasiSchema);
