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
exports.jabatan = void 0;
var controller = __importStar(require("../controllers/jabatan.controller"));
var express_1 = require("express");
exports.jabatan = (0, express_1.Router)();
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
exports.jabatan.get("/", controller.getAll);
