import express from "express";
import {getCurrentWeather} from "../controller/Weather.js"

const router = express.Router();


router.get('/api/v1/currentWeather',getCurrentWeather);

export default router;