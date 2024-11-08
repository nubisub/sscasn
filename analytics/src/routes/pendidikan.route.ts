/**
 * @swagger
 * components:
 *   schemas:
 *     Pendidikan:
 *       type: object
 *       required:
 *         - tk_pend
 *         - kode_pend
 *         - nama_pend
 *       properties:
 *         tk_pend:
 *           type: string
 *           description: Tingkat pendidikan
 *         kode_pend:
 *           type: string
 *           description: Kode pendidikan
 *         nama_pend:
 *           type: string
 *           description: Nama pendidikan
 */

import * as controller from "../controllers/pendidikan.controller";
import { Router } from "express";

export const pendidikan = Router();

/**
 * @swagger
 * /pendidikan:
 *   get:
 *     summary: Retrieve a list of pendidikan with pagination
 *     tags:
 *       - Pendidikan
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
 *         description: A list of pendidikan
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pendidikan'
 */

pendidikan.get("/", controller.getAll);

/**
 * @swagger
 * /pendidikan/{id}:
 *   get:
 *     summary: Get a pendidikan by tingkat pendidikan
 *     tags:
 *       - Pendidikan
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           example: 10
 *           items:
 *             type: string
 *             enum: ['05', '10', '15', '17', '18', '20', '25', '30', '35', '40', '45', '50']
 *         description: Tingkat pendidikan
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pendidikan'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */

pendidikan.get("/:id", controller.getById);
