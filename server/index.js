import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv'
import SequelizeStore from "connect-session-sequelize";
import db from './config/Database.js'
import UserRoute from "./route/UserRoute.js";
import FarmingRoute from "./route/FarmingRoute.js";
import CropRoute from "./route/CropRoute.js";
import AuthRoute from "./route/AuthRoute.js";
import CropManagementRoute from "./route/CropManagementRoute.js";
import SensorRoute from "./route/SensorRoute.js";


dotenv.config();

const app = express();

const sessionStore =SequelizeStore(session.Store);

const store = new sessionStore({
    db:db
})

// (async () => {
//     await db.sync();
// })();


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store:store,
    cookie:{
        secure:'auto',
    }
}))

app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(CropRoute);
app.use(AuthRoute);
app.use(FarmingRoute);
app.use(CropManagementRoute);
app.use(SensorRoute);


// store.sync();




app.listen(process.env.APP_PORT,() => {
    console.log("Server up and running...");
});