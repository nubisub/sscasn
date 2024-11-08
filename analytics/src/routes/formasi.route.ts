import * as controller from "../controllers/formasi.controller";
import { Router } from "express";

export const formasi = Router();

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
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *         example: 1
 *         required: true
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *         example: 10
 *         required: true
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
formasi.get("/", controller.getAll);

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
formasi.get("/:id", controller.getById);
