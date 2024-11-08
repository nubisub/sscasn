"use strict";
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
exports.pendidikan = void 0;
var controller = __importStar(require("../controllers/pendidikan.controller"));
var express_1 = require("express");
exports.pendidikan = (0, express_1.Router)();
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
exports.pendidikan.get("/", controller.getAll);
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
exports.pendidikan.get("/:id", controller.getById);
