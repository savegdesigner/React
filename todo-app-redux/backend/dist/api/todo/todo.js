"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var todoSchema = new mongoose_1.default.Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.Todo = mongoose_1.default.model('Todo', todoSchema);
