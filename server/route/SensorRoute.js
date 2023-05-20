import express from "express";
import {
    getSensor,
    getSensorById,
    createSensor,
    updateSensor,
    deleteSensor
} from "../controller/Sensor.js"


const router = express.Router();

router.get('/api/v1/sensor',getSensor);
router.get('/api/v1/sensor/:id',getSensorById);
router.post('/api/v1/sensor',createSensor);
router.patch('/api/v1/sensor/:id',updateSensor);
router.delete('/api/v1/sensor/:id',deleteSensor);

export default router;