"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateMiddleware_1 = require("../../middleware/validateMiddleware");
const core_1 = __importDefault(require("../../core"));
const imageExists_1 = __importDefault(require("../../utils/imageExists"));
const routes = (0, express_1.Router)();
routes.get('/display', (0, validateMiddleware_1.displayValidator)(), validateMiddleware_1.validatingMiddleware, async (request, response) => {
    // Obtaining the filename of the query
    const targetFilename = request.query.filename;
    try {
        response.render('main', { new_images: `${targetFilename}.jpg` });
    }
    catch (error) {
        throw new Error('Error: Something went wrong!!! ');
    }
});
routes.get('/resize_image', (0, validateMiddleware_1.sizeValidator)(), validateMiddleware_1.validatingMiddleware, async (request, response) => {
    // Get height value as an integer
    // radix must be 10 for having right readable image values
    const height = parseInt(request.query.height, 10);
    // Get width as an integer
    const width = parseInt(request.query.width, 10);
    // Get filename
    const filename = request.query.filename;
    try {
        // Is the image exists?
        const imageExistFunc = await (0, imageExists_1.default)(width, height, filename);
        // If not?
        if (!imageExistFunc) {
            // Resize the target image and save it
            await (0, core_1.default)(width, height, filename);
        }
        response.render('resize_image', {
            width,
            height,
            new_images: `${filename}_${width}_${height}.jpg`,
        });
    }
    catch (error) {
        throw new Error(`Error: Sorry can not resize the image}`);
    }
});
exports.default = routes;
