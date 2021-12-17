"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayValidator = exports.sizeValidator = exports.validatingMiddleware = void 0;
var express_validator_1 = require("express-validator");
var index_1 = require("../constants/index");
// query([fields, message])
//https://express-validator.github.io/docs/check-api.html#queryfields-message
var sizeValidator = function () { return [
    //Width
    (0, express_validator_1.query)('width').exists().toInt().isInt({ max: 1200 }).withMessage('Width required with maximum 1200'),
    //height
    (0, express_validator_1.query)('height').exists().toInt().isInt({ max: 1200 }).withMessage('Height required with maximum 1200'),
    //Filename
    (0, express_validator_1.query)('filename').exists().isIn(index_1.MYImages).withMessage('Image name is a must')
]; };
exports.sizeValidator = sizeValidator;
// Previewing validation Function
var displayValidator = function () { return [
    (0, express_validator_1.query)('filename').exists().isIn(index_1.MYImages).withMessage('Required image name'),
]; };
exports.displayValidator = displayValidator;
var validatingMiddleware = function (request, response, next) {
    var err = function (_a) {
        var msg = _a.msg, param = _a.param;
        return "[".concat(param, "]: ").concat(msg);
    };
    var errors = (0, express_validator_1.validationResult)(request).formatWith(err);
    // Check for errors
    if (errors.isEmpty()) {
        return next();
    }
    // 422 Unprocessable Entity
    return response.status(422).json({ status: 'error', errors: errors.array({ onlyFirstError: true }) });
};
exports.validatingMiddleware = validatingMiddleware;
