import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv'
// import db from './config/Database.js'
import UserRoute from "./route/UserRoute.js";
import FarmingRoute from "./route/FarmingRoute.js";
import CropRoute from "./route/CropRoute.js";
import AuthRoute from "./route/AuthRoute.js";

dotenv.config();

const app = express();

// (async () => {
//     await db.sync();
// })();


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie:{
        secure:'auto',
    }
}))

app.use(cors({
    credentials:true,
    origin: 'https://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(FarmingRoute);
app.use(CropRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT,() => {
    console.log("Server up and running...");
});