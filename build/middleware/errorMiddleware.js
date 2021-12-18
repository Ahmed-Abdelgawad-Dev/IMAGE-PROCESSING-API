"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrorMiddleware = (error, request, response, next) => {
    var _a;
    // Error code if not 500 server error.
    const status = error.status || 500;
    // Error message otherwise a custom error.
    const message = (_a = error.message) !== null && _a !== void 0 ? _a : 'Sorry, something went wrong';
    response.status(status).json({ status, message });
    next();
};
exports.default = httpErrorMiddleware;
