"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var port = 3003;
var app = express_1.default();
var corsOptions = {
    "origin": "http://localhost:8080",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};
app.use(cors_1.default(corsOptions));
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.listen(port, function () {
    console.log("App running 🏃");
});
