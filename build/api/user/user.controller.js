"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config_db/database");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { firstName, lastName, gender, email, password, number } = req.body;
    // let query = `INSERT INTO registration (firstName, lastName, gender, email, password, number) VALUES ("${firstName}", "${lastName}","${gender}","${email}","${password}","${number}") `;
    let query = `INSERT INTO registration (firstName, lastName, gender, email, password, number) VALUES ("${firstName}","${lastName}","${gender}","${email}","${password}","${number}") `;
    (0, database_1.Connect)()
        .then((connection) => {
        (0, database_1.Query)(connection, query)
            .then((result) => {
            return res.status(200).json({
                result
            });
        })
            .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let query = 'SELECT * FROM registration';
    (0, database_1.Connect)()
        .then((connection) => {
        (0, database_1.Query)(connection, query)
            .then((results) => {
            return res.status(200).json({
                results
            });
        })
            .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
const getoneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const UserId = req.params.UserId;
    let query = `SELECT * FROM registration WHERE id = ${UserId}`;
    (0, database_1.Connect)()
        .then((connection) => {
        (0, database_1.Query)(connection, query)
            .then((results) => {
            return res.status(200).json({
                results
            });
        })
            .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //let bookId = req.body.bookId;
    const UserId = req.params.UserId;
    let query = `DELETE FROM registration WHERE id = "${UserId}" `;
    (0, database_1.Connect)()
        .then((connection) => {
        (0, database_1.Query)(connection, query)
            .then((result) => {
            return res.status(200).json({
                result
            });
        })
            .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const UserId = req.params.UserId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.password;
    const number = req.body.number;
    const query = `UPDATE registration SET firstName = "${firstName}", lastName = "${lastName}" , gender = "${gender}" , email = "${email}" , password = "${password}" , number = "${number} WHERE id = ${UserId}`;
    const connection = yield (0, database_1.Connect)();
    const result = yield (0, database_1.Query)(connection, query);
    if (result) {
        return res.status(200).json({
            result
        });
    }
    else {
        return res.status(500).json({
            message: 'User could not be updated.'
        });
    }
});
exports.default = { createUser, getAllUser, updateUser, deleteUser, getoneUser };
