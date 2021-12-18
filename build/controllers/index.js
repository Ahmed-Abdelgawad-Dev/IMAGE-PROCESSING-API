"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const index_1 = require("../constants/index");
// Recommended Async / await implementation.
const ResizeImg = async (width, height, filename) => {
    const currentImagePath = `${index_1.IMAGES_PATH}/${filename}.jpg`;
    const newImagePath = `${index_1.IMAGES_OUTPUT_PATH}/${filename}_${width}_${height}.jpg`;
    try {
        // https://www.npmjs.com/package/sharp
        await (0, sharp_1.default)(currentImagePath).resize(Number(width), Number(height)).toFile(newImagePath);
    }
    catch (error) {
        throw new Error('Sorry we can not resize your image!');
    }
};
exports.default = ResizeImg;
