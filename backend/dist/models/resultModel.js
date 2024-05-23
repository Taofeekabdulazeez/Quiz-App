"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ResultSchema = new mongoose_1.Schema({
    student_id: String,
    course: String,
    startTime: Date,
    endTime: Date,
    score: Number,
    pass: Boolean,
    total: Number,
    status: String,
});
const Result = (0, mongoose_1.model)("Result", ResultSchema);
exports.default = Result;
