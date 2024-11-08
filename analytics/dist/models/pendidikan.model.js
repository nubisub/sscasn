"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pendidikan = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var pendidikanSchema = new mongoose_1.default.Schema({
    tk_pend: {
        type: String,
        required: true,
    },
    kode_pend: {
        type: String,
        required: true,
    },
    nama_pend: {
        type: String,
        required: true,
    },
});
exports.Pendidikan = mongoose_1.default.model("Pendidikan", pendidikanSchema);
