"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const questionRoutes_1 = __importDefault(require("./routes/questionRoutes"));
const resultRoutes_1 = __importDefault(require("./routes/resultRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static(`backend`));
app.use("/api/users", userRoutes_1.default);
app.use("/api/questions", questionRoutes_1.default);
app.use("/api/results", resultRoutes_1.default);
app.all("*", (request, response, next) => {
    response.send("cannot find route");
});
exports.default = app;
