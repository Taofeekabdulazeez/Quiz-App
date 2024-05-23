"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.QuestionSchema = new mongoose_1.Schema({
    question: String,
    options: Array,
    correctOption: Number,
}, { versionKey: false });
const Question = (0, mongoose_1.model)("Question", exports.QuestionSchema);
exports.default = Question;
