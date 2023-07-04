import express from 'express';
import http from 'http';
import router from './api/user/user.routes';
import process from 'process';
import config from './api/user/config';

const app = express();

app.use(express.json());

app.use('/registration', router);

router.use((req, res, next) => {
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
const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () => {
    console.log('Server is running', config.server.port);
});
