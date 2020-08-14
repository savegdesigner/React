"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var todoService_1 = require("../api/todo/todoService");
var routes = express_1.default.Router();
routes.get('/todo', todoService_1.TodoService.get);
routes.post('/todo', todoService_1.TodoService.create);
routes.put('/todo/:id', todoService_1.TodoService.update);
routes.delete('/todo/:id', todoService_1.TodoService.delete);
exports.default = routes;
