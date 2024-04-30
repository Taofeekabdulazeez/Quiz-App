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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getAllUsers = void 0;
function getAllUsers(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        response.status(200).json({
            status: "success",
            results: 10,
            data: { name: "Taofeek", age: 23 },
        });
        // response.send("Hello");
    });
}
exports.getAllUsers = getAllUsers;
function getUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.getUser = getUser;
