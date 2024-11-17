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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.getAll = void 0;
var formasi_model_1 = require("../models/formasi.model");
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, limit, instansi_kode, jabatan_kode, pendidikan_kode, min_gaji, max_gaji, sort_by, sort_order, search, query, sort, regexPendidikan, regexSearch, offset, formasi, total_items, total_pages, pagination, _a, error_1;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 5, , 6]);
                page = Math.max(parseInt(req.query.page) || 1, 1);
                limit = Math.max(parseInt(req.query.limit) || 10, 1);
                instansi_kode = req.query.instansi_kode;
                jabatan_kode = req.query.jabatan_kode;
                pendidikan_kode = req.query.pendidikan_kode;
                min_gaji = req.query.min_gaji;
                max_gaji = req.query.max_gaji;
                sort_by = req.query.sort_by || "jumlah_formasi";
                sort_order = req.query.sort_order || "desc";
                search = req.query.search;
                query = {};
                sort = {};
                sort[sort_by] = sort_order === "asc" ? 1 : -1;
                if (instansi_kode) {
                    query.instansi_id = instansi_kode;
                }
                if (jabatan_kode) {
                    query.jabatan_kd = jabatan_kode;
                }
                if (pendidikan_kode) {
                    regexPendidikan = new RegExp("\\b".concat(pendidikan_kode, "\\b"));
                    query.kode_ref_pend = regexPendidikan;
                }
                if (min_gaji) {
                    query.gaji_min = { $gte: parseInt(min_gaji) };
                }
                if (max_gaji) {
                    query.gaji_max = { $lte: parseInt(max_gaji) };
                }
                if (search) {
                    regexSearch = new RegExp(search, "i");
                    query.$or = [
                        { ins_nm: regexSearch },
                        { jabatan_nm: regexSearch },
                        { lokasi_nm: regexSearch },
                        { pendidikan_nm: regexSearch },
                    ];
                }
                if (limit > 100)
                    limit = 100;
                offset = (page - 1) * limit;
                return [4 /*yield*/, formasi_model_1.Formasi.find(query)
                        .select("-_id formasi_id ins_nm jabatan_nm lokasi_nm pendidikan_nm jumlah_formasi jumlah_ms gaji_min gaji_max")
                        .sort(sort)
                        .limit(limit)
                        .skip(offset)];
            case 1:
                formasi = _d.sent();
                return [4 /*yield*/, formasi_model_1.Formasi.countDocuments(query)];
            case 2:
                total_items = _d.sent();
                total_pages = Math.ceil(total_items / limit);
                _b = {
                    current_page: page,
                    per_page: limit,
                    total_pages: total_pages
                };
                return [4 /*yield*/, formasi_model_1.Formasi.countDocuments()];
            case 3:
                _b.total_items = _d.sent();
                _c = {};
                _a = page * limit;
                return [4 /*yield*/, formasi_model_1.Formasi.countDocuments()];
            case 4:
                pagination = (_b.links = (_c.next_page_url = _a < (_d.sent())
                    ? "".concat(process.env.API_URL, "/formasi?page=").concat(page + 1, "&limit=").concat(limit)
                    : null,
                    _c.previous_page_url = page > 1
                        ? "".concat(process.env.API_URL, "/formasi?page=").concat(page - 1, "&limit=").concat(limit)
                        : null,
                    _c),
                    _b);
                res.json({
                    status: "success",
                    code: 200,
                    message: page > total_pages
                        ? "No data available for the requested page"
                        : "Data retrieved successfully",
                    data: formasi,
                    pagination: pagination,
                    errors: null,
                });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _d.sent();
                //
                res.json({
                    status: "error",
                    code: error_1.code || 500,
                    message: "Internal Server Error",
                    data: null,
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getAll = getAll;
var getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var formasi, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, formasi_model_1.Formasi.findOne({
                        formasi_id: req.params.id,
                    })];
            case 1:
                formasi = _a.sent();
                if (!formasi) {
                    res.status(404).json({
                        status: "error",
                        code: 404,
                        message: "Formasi not found",
                        data: null,
                        errors: "Formasi not found",
                    });
                    return [2 /*return*/];
                }
                res.json({
                    status: "success",
                    code: 200,
                    message: "Data retrieved successfully",
                    data: formasi,
                    errors: null,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.json({
                    status: "error",
                    code: error_2.code || 500,
                    message: "Internal Server Error",
                    data: null,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getById = getById;
