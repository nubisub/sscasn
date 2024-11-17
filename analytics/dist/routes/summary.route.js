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
exports.summary = void 0;
var controller = __importStar(require("../controllers/summary.controller"));
var express_1 = require("express");
exports.summary = (0, express_1.Router)();
/**
 * @swagger
 * /summary/jabatan:
 *   get:
 *     summary: Retrieve a summary list of formasi by jabatan
 *     tags:
 *       - Summary
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         example: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         example: 10
 *         description: Number of items per page
 *       - in: query
 *         name: sort_by
 *         schema:
 *           type: string
 *           enum: [jumlah_formasi, jumlah_pelamar, gaji_min, gaji_max, gaji_min_avg, gaji_max_avg]
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
 *         description: A list of formasi by jabatan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 code:
 *                   type: integer
 *                   description: Response code
 *                 message:
 *                   type: string
 *                   description: Response message
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nama Jabatan
 *                       value:
 *                         type: integer
 *                         description: Total formasi
 *                 errors:
 *                   type: object
 *                   description: Error details
 *                   nullable: true
 */
exports.summary.get("/jabatan", controller.jabatanSummary);
/**
 * @swagger
 * /summary/instansi:
 *   get:
 *     summary: Retrieve a summary list of formasi by instansi
 *     tags:
 *       - Summary
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           example: 1
 *         required: false
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           example: 10
 *         required: false
 *         description: Number of items per page
 *       - in: query
 *         name: sort_by
 *         schema:
 *           type: string
 *           enum: [jumlah_formasi, jumlah_pelamar, gaji_min, gaji_max, gaji_min_avg, gaji_max_avg]
 *         required: false
 *         description: Sort by field
 *         example: jumlah_formasi
 *     responses:
 *       200:
 *         description: A list of formasi by instansi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 code:
 *                   type: integer
 *                   description: Response code
 *                 message:
 *                   type: string
 *                   description: Response message
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nama Instansi
 *                       value:
 *                         type: integer
 *                         description: Total formasi
 *                 errors:
 *                   type: object
 *                   description: Error details
 *                   nullable: true
 */
exports.summary.get("/instansi", controller.instansiSummary);
