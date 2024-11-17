"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instansiSummary = exports.jabatanSummary = void 0;
var formasi_model_1 = require("../models/formasi.model");
var jabatanSummary = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, sort_by, sort_order, limit, skip, basePipeline, countResult, total_data, total_page, pipeline, formasi, pagination, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                page = parseInt(req.query.page) || 1;
                sort_by = req.query.sort_by || "jumlah_formasi";
                sort_order = req.query.sort_order || "desc";
                limit = req.query.limit ? parseInt(req.query.limit) : 10;
                skip = (page - 1) * limit;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                basePipeline = [
                    {
                        $group: {
                            _id: "$jabatan_nm",
                            jumlah_formasi: { $sum: "$jumlah_formasi" },
                            jumlah_pelamar: { $sum: "$jumlah_ms" },
                            gaji_min: { $min: "$gaji_min" },
                            gaji_max: { $max: "$gaji_max" },
                            gaji_min_avg: { $avg: "$gaji_min" },
                            gaji_max_avg: { $avg: "$gaji_max" },
                        },
                    },
                    {
                        $sort: (_a = {}, _a[sort_by] = sort_order === "asc" ? 1 : -1, _a),
                    },
                ];
                return [4 /*yield*/, formasi_model_1.Formasi.aggregate(__spreadArray(__spreadArray([], basePipeline, true), [
                        { $count: "total" },
                    ], false))];
            case 2:
                countResult = _b.sent();
                total_data = countResult.length > 0 ? countResult[0].total : 0;
                total_page = Math.ceil(total_data / limit);
                pipeline = __spreadArray(__spreadArray(__spreadArray([], basePipeline, true), (limit !== Infinity ? [{ $skip: skip }, { $limit: limit }] : []), true), [
                    {
                        $project: {
                            _id: 0,
                            nama: "$_id",
                            jumlah_formasi: 1,
                            gaji_min: 1,
                            gaji_max: 1,
                            gaji_min_avg: 1,
                            gaji_max_avg: 1,
                            jumlah_pelamar: 1,
                        },
                    },
                ], false);
                return [4 /*yield*/, formasi_model_1.Formasi.aggregate(pipeline)];
            case 3:
                formasi = _b.sent();
                pagination = {
                    page: page,
                    limit: limit,
                    total_page: total_page,
                    total_data: total_data,
                    links: {
                        previous: page > 1
                            ? "".concat(process.env.API_URL, "/summary/jabatan?page=").concat(page - 1, "&limit=").concat(limit)
                            : null,
                        next: page * limit < total_data
                            ? "".concat(process.env.API_URL, "/summary/jabatan?page=").concat(page + 1, "&limit=").concat(limit)
                            : null,
                    },
                };
                res.json({
                    status: "success",
                    code: 200,
                    message: "Data retrieved successfully",
                    data: formasi,
                    pagination: pagination,
                    errors: null,
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.error(error_1); // Log error for debugging
                res.status(500).json({
                    status: "error",
                    code: error_1.code || 500,
                    message: error_1.message || "Internal Server Error",
                    data: null,
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.jabatanSummary = jabatanSummary;
var instansiSummary = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, limit, skip, sort_by, sort_order, basePipeline, countPipeline, countResult, total_data, total_page, pipeline, formasi, pagination, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                page = parseInt(req.query.page) || 1;
                limit = req.query.limit
                    ? parseInt(req.query.limit)
                    : Infinity;
                skip = (page - 1) * (limit !== Infinity ? limit : 0);
                sort_by = req.query.sort_by || "jumlah_formasi";
                sort_order = req.query.sort_order || "desc";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                basePipeline = [
                    {
                        $group: {
                            _id: "$ins_nm",
                            jumlah_formasi: { $sum: "$jumlah_formasi" },
                            jumlah_pelamar: { $sum: "$jumlah_ms" },
                            gaji_min: { $min: "$gaji_min" },
                            gaji_max: { $max: "$gaji_max" },
                            gaji_min_avg: { $avg: "$gaji_min" },
                            gaji_max_avg: { $avg: "$gaji_max" },
                        },
                    },
                    {
                        $sort: (_a = {}, _a[sort_by] = sort_order === "asc" ? 1 : -1, _a),
                    },
                ];
                countPipeline = __spreadArray(__spreadArray([], basePipeline, true), [{ $count: "total" }], false);
                return [4 /*yield*/, formasi_model_1.Formasi.aggregate(countPipeline)];
            case 2:
                countResult = _b.sent();
                total_data = countResult.length > 0 ? countResult[0].total : 0;
                total_page = limit !== Infinity ? Math.ceil(total_data / limit) : 1;
                pipeline = __spreadArray([], basePipeline, true);
                if (limit !== Infinity) {
                    pipeline.push({ $skip: skip }, { $limit: limit });
                }
                pipeline.push({
                    $project: {
                        _id: 0,
                        nama: "$_id",
                        jumlah_formasi: 1,
                        jumlah_pelamar: 1,
                        gaji_min: 1,
                        gaji_max: 1,
                        gaji_min_avg: 1,
                        gaji_max_avg: 1,
                        gaji_avg: 1,
                    },
                });
                return [4 /*yield*/, formasi_model_1.Formasi.aggregate(pipeline)];
            case 3:
                formasi = _b.sent();
                pagination = {
                    page: page,
                    limit: limit,
                    total_page: total_page,
                    total_data: total_data,
                    links: {
                        previous: page > 1
                            ? "".concat(process.env.API_URL, "/summary/instansi?page=").concat(page - 1, "&limit=").concat(limit)
                            : null,
                        next: page * limit < total_data
                            ? "".concat(process.env.API_URL, "/summary/instansi?page=").concat(page + 1, "&limit=").concat(limit)
                            : null,
                    },
                };
                res.json({
                    status: "success",
                    code: 200,
                    message: "Data retrieved successfully",
                    data: formasi,
                    pagination: pagination,
                    errors: null,
                });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                res.json({
                    status: "error",
                    code: error_2.code || 500,
                    message: error_2.message || "Internal Server Error",
                    data: null,
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.instansiSummary = instansiSummary;
