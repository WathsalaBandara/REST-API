"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const user_routes_1 = __importDefault(require("./api/user/user.routes"));
const config_1 = __importDefault(require("./api/user/config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/registration', user_routes_1.default);
user_routes_1.default.use((req, res, next) => {
    const error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
/*
const port = process.env.PORT || 3000;
//const host = process.env.HOST || 'localhost';

app.listen(port, () => {
    console.log('server up and running on PORT :', port);
    //console.log(host);
});

*/
const httpServer = http_1.default.createServer(app);
httpServer.listen(config_1.default.server.port, () => {
    console.log('Server is running', config_1.default.server.port);
});
