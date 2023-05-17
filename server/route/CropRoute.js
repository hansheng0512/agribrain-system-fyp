import express from "express";
import {
    getCrop,
    getCropById,
    createCrop,
    updateCrop,
    deleteCrop
} from "../controller/Crop.js"
import {verifyUser} from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/api/v1/crop',verifyUser,getCrop);
router.get('/api/v1/crop/:id',verifyUser,getCropById);
router.post('/api/v1/crop',verifyUser,createCrop);
router.patch('/api/v1/crop/:id',verifyUser,updateCrop);
router.delete('/api/v1/crop/:id',verifyUser,deleteCrop);

export default router;