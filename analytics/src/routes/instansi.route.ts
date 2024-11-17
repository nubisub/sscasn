import * as controller from "../controllers/instansi.controller";
import { Router } from "express";

export const instansi = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Instansi:
 *       type: object
 *       properties:
 *         kode:
 *           type: string
 *           description: Kode instansi
 *           example: JF0087014
 *         nama:
 *           type: string
 *           description: Nama instansi
 *           example: ANALIS ANGGARAN AHLI PERTAMA
 */

/**
 * @swagger
 * /instansi:
 *   get:
 *     summary: Get a list of instansi
 *     tags: [Instansi]
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
 *         description: A list of instansi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Instansi'
 */

instansi.get("/", controller.getAll);
