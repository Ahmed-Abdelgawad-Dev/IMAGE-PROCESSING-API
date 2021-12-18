"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.npmjs.com/package/fs-extra
// fs-extra adds file system methods that aren't included in the native fs module
// Adds promise support to the fs methods
const fs_extra_1 = __importDefault(require("fs-extra"));
const index_1 = require("../constants/index");
const imageExists = async (width, height, filename) => {
    const pathToImage = `${index_1.IMAGES_OUTPUT_PATH}/${filename}_${width}_${height}.jpg`;
    try {
        // https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/ensureFile.md
        // Create the file if not exist after checking it.
        await fs_extra_1.default.ensureDir(index_1.IMAGES_OUTPUT_PATH);
        const newImageExists = await fs_extra_1.default.pathExists(pathToImage);
        return newImageExists;
    }
    catch (error) {
        throw new Error('File does not exist');
    }
};
exports.default = imageExists;
