"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./user.controller"));
const router = express_1.default.Router();
router.post('/', user_controller_1.default.createUser);
router.get('/', user_controller_1.default.getAllUser);
router.get('/:UserId', user_controller_1.default.getoneUser);
router.put('/:UserId', user_controller_1.default.updateUser);
router.delete('/:UserId', user_controller_1.default.deleteUser);
module.exports = router;
