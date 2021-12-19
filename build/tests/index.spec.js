"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest")); // Third party for testing endpoint
const index_1 = __importDefault(require("../index"));
const imageExists_1 = __importDefault(require("../utils/imageExists"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../constants");
// create a request object to test the endpoint
const request = (0, supertest_1.default)(index_1.default);
// Endpoint tests.
describe("Testing endpoints:", () => {
    it('Root endpoints 200 response.', async () => {
        const resp = await request.get('/');
        expect(resp.status).toBe(200);
    });
    it('Resizing endpoint works.', async () => {
        const resp = await request.get('/api/images/resize_image/?width=500&height=500&filename=pic1');
        expect(resp.status).toBe(200);
    });
    it('Cached image functionality works.', async () => {
        const resp = await request.get('/api/images/resize_image/?width=200&height=200&filename=pic2');
        expect(fs_1.default.existsSync(`${constants_1.IMAGES_OUTPUT_PATH}/pic2_200_200.jpg`)).toBeTruthy();
    });
    it('Displaying pics endpoint.', async () => {
        const resp = await request.get('/api/images/display/?filename=pic2');
        expect(resp.status).toBe(200);
    });
});
// Image tests.
describe('Testing Processing Image Functionalities:', () => {
    it('pic1_200_200.jpg: does not match the original.', () => {
        expect((0, imageExists_1.default)(200, 200, 'pic1') instanceof Promise).toBe(true);
    });
    it('imageExists func is ok.', () => {
        expect(imageExists_1.default).toBeDefined();
    });
    it('Testing image does not exist.', () => {
        expect(fs_1.default.existsSync(`${constants_1.IMAGES_OUTPUT_PATH}/pic2_333_333.jpg`)).toBeFalsy();
    });
});
