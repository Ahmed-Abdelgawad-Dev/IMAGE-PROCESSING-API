"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
// Adding a security later to the environment variables
dotenv.config();
const PORT = process.env.PORT || 3001 || 3002 || 3003;
// const PORT = 3000
// Express App Object.
const app = (0, express_1.default)();
//Make static files visible dir for express.
app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'images')));
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path_1.default.resolve(__dirname, 'views'));
// HTTP request logger middleware
// short: Shorter than default, also including response time.
app.use((0, morgan_1.default)('short'));
// HTTP security middleware
// https://www.npmjs.com/package/helmet
app.use((0, helmet_1.default)());
// Adding api endpoint
app.use('/api', routes_1.default);
// Root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'This is the root endpoint in json format' });
});
// Start the backend server.
app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`);
});
exports.default = app;
