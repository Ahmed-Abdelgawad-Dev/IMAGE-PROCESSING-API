"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest")); // Third party for testing endpoint
const index_1 = __importDefault(require("../index"));
// create a request object to test the endpoint
const request = (0, supertest_1.default)(index_1.default);
describe("Testing endpoint's response", () => {
    it('Test endpoint root.', async () => {
        const resp = await request.get('/');
        expect(resp.status).toBe(200);
    });
});
