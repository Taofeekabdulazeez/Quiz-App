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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveResult = void 0;
const resultModel_1 = __importDefault(require("../models/resultModel"));
function saveResult(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userResult = yield resultModel_1.default.create({
                student_id: "6635f85c91234a86450e1712",
                startTime: "7pm",
                endTime: "7:15pm",
                course: "GNS112",
                score: 20,
                total: 30,
                pass: true,
                status: "completed",
            });
            response.status(200).json(userResult);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.saveResult = saveResult;
