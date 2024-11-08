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
var pendidikan_model_1 = require("../models/pendidikan.model");
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, limit, total_pages, _a, _b, offset, pendidikan, pagination, _c, error_1;
    var _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 5, , 6]);
                page = Math.max(parseInt(req.query.page) || 1, 1);
                limit = Math.max(parseInt(req.query.limit) || 10, 1);
                _b = (_a = Math).ceil;
                return [4 /*yield*/, pendidikan_model_1.Pendidikan.countDocuments()];
            case 1:
                total_pages = _b.apply(_a, [(_f.sent()) / limit]);
                if (limit > 100)
                    limit = 100;
                offset = (page - 1) * limit;
                return [4 /*yield*/, pendidikan_model_1.Pendidikan.find().skip(offset).limit(limit)];
            case 2:
                pendidikan = _f.sent();
                _d = {
                    current_page: page,
                    per_page: limit,
                    total_pages: total_pages
                };
                return [4 /*yield*/, pendidikan_model_1.Pendidikan.countDocuments()];
            case 3:
                _d.total_items = _f.sent();
                _e = {};
                _c = page * limit;
                return [4 /*yield*/, pendidikan_model_1.Pendidikan.countDocuments()];
            case 4:
                pagination = (_d.links = (_e.next_page_url = _c < (_f.sent())
                    ? "".concat(process.env.API_URL, "/pendidikan?page=").concat(page + 1, "&limit=").concat(limit)
                    : null,
                    _e.previous_page_url = page > 1
                        ? "".concat(process.env.API_URL, "/pendidikan?page=").concat(page - 1, "&limit=").concat(limit)
                        : null,
                    _e),
                    _d);
                res.json({
                    status: "success",
                    code: 200,
                    message: page > total_pages
                        ? "No data available for the requested page"
                        : "Data retrieved successfully",
                    data: pendidikan,
                    pagination: pagination,
                    errors: null,
                });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _f.sent();
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
    var pendidikan, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pendidikan_model_1.Pendidikan.find({
                        tk_pend: req.params.id,
                    })];
            case 1:
                pendidikan = _a.sent();
                if (!pendidikan) {
                    res.status(404).json({
                        status: "success",
                        code: 200,
                        message: "Data not found",
                        data: null,
                        errors: null,
                    });
                    return [2 /*return*/];
                }
                res.json({
                    status: "success",
                    code: 200,
                    message: "Data retrieved successfully",
                    data: pendidikan,
                    errors: null,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({
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
