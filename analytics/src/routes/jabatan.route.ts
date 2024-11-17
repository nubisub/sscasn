import * as controller from "../controllers/jabatan.controller";
import { Router } from "express";

export const jabatan = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Jabatan:
 *       type: object
 *       properties:
 *         kode:
 *           type: string
 *           description: Kode jabatan
 *           example: JF0087014
 *         nama:
 *           type: string
 *           description: Nama jabatan
 *           example: ANALIS ANGGARAN AHLI PERTAMA
 */

/**
 * @swagger
 * /jabatan:
 *   get:
 *     summary: Get a list of jabatan
 *     tags: [Jabatan]
 *     parameters:
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
 *     responses:
 *       200:
 *         description: A list of jabatan
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jabatan'
 */

jabatan.get("/", controller.getAll);
