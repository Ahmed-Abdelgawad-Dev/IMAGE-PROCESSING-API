"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateMiddleware_1 = require("../../middleware/validateMiddleware");
const controllers_1 = __importDefault(require("../../controllers"));
const imageExists_1 = __importDefault(require("../../utils/imageExists"));
const routes = (0, express_1.Router)();
routes.get('/resize', (0, validateMiddleware_1.sizeValidator)(), validateMiddleware_1.validatingMiddleware, async (request, response) => {
    // Get height value as an integer  
    const height = parseInt(request.query.height, 10); //radix must be 10 for having right readable image values
    // Get width as an integer
    const width = parseInt(request.query.width, 10); // same radix too
    // Get filename
    const filename = request.query.filename;
    try {
        // Is the image exists?
        const imageExistFunc = await (0, imageExists_1.default)(width, height, filename);
        // If not?
        if (!imageExistFunc) {
            // Resize the target image and save it
            await (0, controllers_1.default)(width, height, filename);
        }
        response.render('resize', { width, height, new_images: `${filename}_${width}_${height}.jpg` });
    }
    catch (error) {
        throw new Error(`Error: Sorry can not resize the image}`);
        console.log(error);
    }
});
routes.get('/preview', (0, validateMiddleware_1.displayValidator)(), validateMiddleware_1.validatingMiddleware, async (request, response) => {
    // Obtaining the filename of the query
    const targetFilename = request.query.filename;
    try {
        response.render('index', { new_images: `${targetFilename}.jpg` });
    }
    catch (error) {
        throw new Error('Error: Something went wrong!!! ');
    }
});
exports.default = routes;
