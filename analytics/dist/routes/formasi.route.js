"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formasi = void 0;
var controller = __importStar(require("../controllers/formasi.controller"));
var express_1 = require("express");
exports.formasi = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *   schemas:
 *     SyaratAdmin:
 *       type: object
 *       properties:
 *         syarat:
 *           type: string
 *           description: "Syarat"
 *         is_mandatory:
 *           type: boolean
 *           description: "Apakah syarat wajib"
 *       required:
 *         - syarat
 *         - is_mandatory
 *
 *     Formasi:
 *       type: object
 *       properties:
 *         formasi_id:
 *           type: string
 *           description: "ID Formasi"
 *         mpi_id:
 *           type: string
 *           description: "ID MPI"
 *         instansi_id:
 *           type: string
 *           description: "ID Instansi"
 *         ins_kd:
 *           type: string
 *           description: "Kode Instansi"
 *         ins_nm:
 *           type: string
 *           description: "Nama Instansi"
 *         pengadaan_kd:
 *           type: string
 *           description: "Kode Pengadaan"
 *         jp_nama:
 *           type: string
 *           description: "Nama Jenis Pengadaan"
 *         formasi_nm:
 *           type: string
 *           description: "Nama Formasi"
 *         jabatan_kd:
 *           type: string
 *           description: "Kode Jabatan"
 *         jabatan_nm:
 *           type: string
 *           description: "Nama Jabatan"
 *         lokasi_nm:
 *           type: string
 *           description: "Nama Lokasi"
 *         pendidikan_nm:
 *           type: string
 *           description: "Nama Pendidikan"
 *         jumlah_formasi:
 *           type: number
 *           description: "Jumlah Formasi"
 *         DISABLE:
 *           type: boolean
 *           description: "Status Disable"
 *         group_tk_pendidikan_id:
 *           type: string
 *           description: "ID Grup Tingkat Pendidikan"
 *         kode_ref_pend:
 *           type: string
 *           description: "Kode Referensi Pendidikan"
 *         job_desc:
 *           type: string
 *           description: "Deskripsi Pekerjaan"
 *         keahlian:
 *           type: string
 *           description: "Keahlian"
 *         gaji_min:
 *           type: number
 *           description: "Gaji Minimum"
 *         gaji_max:
 *           type: number
 *           description: "Gaji Maksimum"
 *         link_web_instansi:
 *           type: string
 *           description: "Link Website Instansi"
 *         call_center_instansi:
 *           type: string
 *           description: "Call Center Instansi"
 *         medsos_instansi:
 *           type: string
 *           description: "Media Sosial Instansi"
 *         helpdesk_instansi:
 *           type: string
 *           description: "Helpdesk Instansi"
 *         syarat_admin:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/SyaratAdmin'
 *           description: "Syarat Administrasi"
 *         update_time:
 *           type: string
 *           format: date-time
 *           description: "Waktu Update"
 *         jenis_formasi_id:
 *           type: string
 *           description: "ID Jenis Formasi"
 *         jumlah_ms:
 *           type: number
 *           description: "Jumlah MS"
 *       required:
 *         - formasi_id
 *         - mpi_id
 *         - instansi_id
 *         - ins_kd
 *         - ins_nm
 *         - pengadaan_kd
 *         - jp_nama
 *         - formasi_nm
 *         - jabatan_kd
 *         - jabatan_nm
 *         - lokasi_nm
 *         - pendidikan_nm
 *         - jumlah_formasi
 *         - DISABLE
 *         - kode_ref_pend
 *         - job_desc
 *         - keahlian
 *         - gaji_min
 *         - gaji_max
 *         - link_web_instansi
 *         - call_center_instansi
 *         - medsos_instansi
 *         - helpdesk_instansi
 *         - update_time
 *         - jenis_formasi_id
 *         - jumlah_ms
 */
/**
 * @swagger
 * /formasi:
 *   get:
 *     summary: Retrieve a list of formasi with pagination
 *     tags:
 *       - Formasi
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search keyword (Jabatan, Instansi, Unit Kerja)
 *         example: "Pengawas"
 *         required: false
 *       - in: query
 *         name: instansi_kode
 *         schema:
 *           type: string
 *         description: Kode Instansi
 *         example: A5EB03E23D46F6A0E040640A040252AD
 *         required: false
 *       - in: query
 *         name: jabatan_kode
 *         schema:
 *           type: string
 *         description: Kode Jabatan
 *         example: JF0087286
 *         required: false
 *       - in: query
 *         name: pendidikan_kode
 *         schema:
 *           type: string
 *         description: Kode Pendidikan
 *         example: 5101087
 *         required: false
 *       - in: query
 *         name: min_gaji
 *         schema:
 *           type: integer
 *         description: Minimum salary
 *         example: 3000000
 *         required: false
 *       - in: query
 *         name: max_gaji
 *         schema:
 *           type: integer
 *         description: Maximum salary
 *         example: 10000000
 *         required: false
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *         example: 1
 *         required: false
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *         example: 10
 *         required: false
 *       - in: query
 *         name: sort_by
 *         schema:
 *           type: string
 *           enum: [jumlah_formasi, jumlah_pelamar, gaji_min, gaji_max]
 *         required: false
 *         description: Sort by field
 *         example: jumlah_formasi
 *       - in: query
 *         name: sort_order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         required: false
 *         description: Sort order
 *         example: desc
 *     responses:
 *       200:
 *         description: A list of formasi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formasi'
 */
exports.formasi.get("/", controller.getAll);
/**
 * @swagger
 * /formasi/{id}:
 *   get:
 *     summary: Get a formasi by ID
 *     tags:
 *      - Formasi
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The formasi ID
 *         example: 60aebcd9-ff1a-4411-a11d-ea2928c49a8a
 *     responses:
 *       200:
 *         description: A single formasi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formasi'
 *       404:
 *         description: Error Not Found
 */
exports.formasi.get("/:id", controller.getById);
