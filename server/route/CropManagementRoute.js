import express from "express";
import {
    getCropManagement,
    getCropManagementById,
    createCropManagement,
    updateCropManagement,
    deleteCropManagement
} from "../controller/CropManagement.js"

const router = express.Router();

router.get('/cropmanagement',getCropManagement);
router.get('/cropmanagement/:id',getCropManagementById);
router.post('/cropmanagement',createCropManagement);
router.patch('/cropmanagement/:id',updateCropManagement);
router.delete('/cropmanagement/:id',deleteCropManagement);

export default router;