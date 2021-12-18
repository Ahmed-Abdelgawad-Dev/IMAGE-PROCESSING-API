"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Extending the Error Class
class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.default = HttpError;
