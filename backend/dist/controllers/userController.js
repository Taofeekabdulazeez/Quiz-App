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
exports.updateUser = exports.createUser = exports.deleteUser = exports.getUser = exports.getAllUsers = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const mongodb_1 = require("mongodb");
function getAllUsers(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userModel_1.default.find();
            response.status(200).json(users);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getAllUsers = getAllUsers;
function getUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const user = yield userModel_1.default.findOne({ _id: new mongodb_1.ObjectId(id) });
            response.status(200).json(user);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getUser = getUser;
function deleteUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = request.params.id;
            yield userModel_1.default.findByIdAndDelete(id);
            response.status(204).json(null);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteUser = deleteUser;
function createUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield userModel_1.default.create(request.body);
            return response.status(200).json(newUser);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createUser = createUser;
function updateUser(request, resposne) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = request.params;
        try {
            const user = yield userModel_1.default.findOneAndUpdate({ _id: id }, request.body, {
                new: true,
            });
            return resposne.status(200).json(user);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.updateUser = updateUser;
