import express from 'express';
import session from 'express-session';
import cors from 'cors';
import sessionController from "./controllers/session.js";
import pingController from "./controllers/ping-controller.js";
const app = express();
import env from 'custom-env'
env.env('dev')
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());

let sess = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
};

if (process.env.APP_ENV === 'dev') {
    app.set('trust proxy', 1)
    sess.cookie.secure = false;
}

app.use(session(sess));

pingController(app)
sessionController(app)

app.listen(process.env.PORT || 4000);