import express from 'express';
import session from 'express-session';
import cors from 'cors';

import sessionController from "./controllers/session.js";
import pingController from "./controllers/ping-controller.js";
const app = express();
import env from 'custom-env'
import paymentController from "./controllers/payment-controller.js";
import * as http from "http";
import * as https from "https";
import * as fs from "fs";
env.env()

app.use(cors({
    credentials: true,
    origin: process.env.REACT_APP
}));
app.use(express.json());

let sess = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
    }
};

let server;

if (process.env.APP_ENV === 'dev')
    sess.cookie.secure = false;
else
    sess.cookie.sameSite = 'none'

app.set('trust proxy', 1)
app.use(session(sess));

if (process.env.APP_ENV === 'dev') {
    server = http.createServer(app);
    console.log("HTTP dev only server")
}
else {
    const options = {
        key: fs.readFileSync('./privkey.pem'),
        cert: fs.readFileSync('./fullchain.pem')
    };
    console.log("HTTPS only server")
    server = https.createServer(options, app);
}

pingController(app)
sessionController(app)
paymentController(app)

console.log(`Starting ${process.env.APP_ENV} at port 4000`)
server.listen(4000);