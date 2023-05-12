import express from "express";
import {
    getFarming,
    getFarmingById,
    createFarming,
    updateFarming,
    deleteFarming
} from "../controller/Famring.js"

const router = express.Router();

router.get('/farming',getFarming);
router.get('/farming/:id',getFarmingById);
router.post('/farming',createFarming);
router.patch('/farming/:id',updateFarming);
router.delete('/farming/:id',deleteFarming);

export default router;