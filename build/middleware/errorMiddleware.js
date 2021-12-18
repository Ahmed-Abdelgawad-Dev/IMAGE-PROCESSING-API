"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrorMiddleware = (error, request, response, next) => {
    // Error code if not 500 server error.
    const status = error.status || 500;
    // Error message otherwise a custom error.
    const message = error.message || 'Sorry, something went wrong';
    response.status(status).json({ status, message });
};
exports.default = httpErrorMiddleware;
