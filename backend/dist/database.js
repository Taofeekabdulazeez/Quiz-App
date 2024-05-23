"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const fs_1 = __importDefault(require("fs"));
const findAll = () => {
    let output;
    fs_1.default.readFile("./users.json", "utf-8", (error, data) => {
        // console.log(data);
        output = JSON.parse(data);
    });
    return output;
};
exports.findAll = findAll;
