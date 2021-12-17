"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpErrorMiddleware = function (error, request, response, next) {
    // Error code if not 500 server error.
    var status = error.status || 500;
    // Error message otherwise a custom error.
    var message = error.message || 'Sorry, something went wrong';
    response.status(status).json({ status: status, message: message });
};
exports.default = httpErrorMiddleware;
