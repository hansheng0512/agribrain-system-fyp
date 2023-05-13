import express from "express";
import {
    getCrop,
    getCropById,
    createCrop,
    updateCrop,
    deleteCrop
} from "../controller/Crop.js"

const router = express.Router();

router.get('/crop',getCrop);
router.get('/crop/:id',getCropById);
router.post('/crop',createCrop);
router.patch('/crop/:id',updateCrop);
router.delete('/crop/:id',deleteCrop);

export default router;