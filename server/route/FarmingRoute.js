import express from "express";
import {
    getFarming,
    getFarmingById,
    createFarming,
    updateFarming,
    deleteFarming
} from "../controller/Famring.js"
import {verifyUser} from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/api/v1/farming',verifyUser,getFarming);
router.get('/api/v1/farming/:id',verifyUser,getFarmingById);
router.post('/api/v1/farming',verifyUser,createFarming);
router.patch('/api/v1/farming/:id',verifyUser,updateFarming);
router.delete('/api/v1/farming/:id',verifyUser,deleteFarming);

export default router;