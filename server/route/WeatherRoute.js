import express from "express";
import {getCurrentWeather, getForecastWeather} from "../controller/Weather.js"

const router = express.Router();


router.get('/api/v1/currentWeather',getCurrentWeather);
router.get('/api/v1/forecastWeather',getForecastWeather);


export default router;