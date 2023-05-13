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

router.get('/crop',verifyUser,getCrop);
router.get('/crop/:id',verifyUser,getCropById);
router.post('/crop',verifyUser,createCrop);
router.patch('/crop/:id',verifyUser,updateCrop);
router.delete('/crop/:id',verifyUser,deleteCrop);

export default router;