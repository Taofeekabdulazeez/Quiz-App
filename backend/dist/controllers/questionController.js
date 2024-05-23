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
exports.deleteQuestion = exports.editQuestion = exports.getQuestion = exports.getAllQuestions = exports.createQuestion = void 0;
const mongodb_1 = require("mongodb");
const questionModel_1 = __importDefault(require("../models/questionModel"));
function createQuestion(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newQuestion = yield questionModel_1.default.create(request.body);
            return response.status(200).json(newQuestion);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createQuestion = createQuestion;
function getAllQuestions(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const questions = yield questionModel_1.default.find();
            response.status(200).json(questions);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getAllQuestions = getAllQuestions;
function getQuestion(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const question = yield questionModel_1.default.findOne({ _id: new mongodb_1.ObjectId(id) });
            response.status(200).json(question);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getQuestion = getQuestion;
function editQuestion(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const question = yield questionModel_1.default.findByIdAndUpdate(id, request.body);
            response.status(200).json(question);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.editQuestion = editQuestion;
function deleteQuestion(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            yield questionModel_1.default.findByIdAndDelete(id);
            response.status(204).json(null);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteQuestion = deleteQuestion;
