"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMAGES_OUTPUT_PATH = exports.IMAGES_PATH = exports.MYImages = void 0;
const path_1 = __importDefault(require("path"));
// My existing pics
const MYImages = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];
exports.MYImages = MYImages;
//Path to the images
const IMAGES_PATH = path_1.default.resolve(__dirname, '../images');
exports.IMAGES_PATH = IMAGES_PATH;
// Path to the output resized images
const IMAGES_OUTPUT_PATH = path_1.default.resolve(__dirname, '../images/new_images');
exports.IMAGES_OUTPUT_PATH = IMAGES_OUTPUT_PATH;
