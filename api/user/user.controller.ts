import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../../config_db/database';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    let { firstName, lastName, gender, email, password, number } = req.body;

    // let query = `INSERT INTO registration (firstName, lastName, gender, email, password, number) VALUES ("${firstName}", "${lastName}","${gender}","${email}","${password}","${number}") `;
    let query = `INSERT INTO registration (firstName, lastName, gender, email, password, number) VALUES ("${firstName}","${lastName}","${gender}","${email}","${password}","${number}") `;

    Connect()
        .then((connection) => {
            Query(connection, query)
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
};
const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    let query = 'SELECT * FROM registration';
    Connect()
        .then((connection) => {
            Query(connection, query)
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
};
const getoneUser = async (req: Request, res: Response, next: NextFunction) => {
    const UserId = req.params.UserId;

    let query = `SELECT * FROM registration WHERE id = ${UserId}`;
    Connect()
        .then((connection) => {
            Query(connection, query)
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
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    //let bookId = req.body.bookId;
    const UserId = req.params.UserId;

    let query = `DELETE FROM registration WHERE id = "${UserId}" `;
    Connect()
        .then((connection) => {
            Query(connection, query)
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
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const UserId = req.params.UserId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.password;
    const number = req.body.number;

    const query = `UPDATE registration SET firstName = "${firstName}", lastName = "${lastName}" , gender = "${gender}" , email = "${email}" , password = "${password}" , number = "${number} WHERE id = ${UserId}`;

    const connection = await Connect();
    const result = await Query(connection, query);

    if (result) {
        return res.status(200).json({
            result
        });
    } else {
        return res.status(500).json({
            message: 'User could not be updated.'
        });
    }
};

export default { createUser, getAllUser, updateUser, deleteUser, getoneUser };
