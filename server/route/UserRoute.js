import express from "express";
import {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controller/User.js"
import {verifyUser} from "../middleware/AuthUser.js"
import {farmerOnly} from "../middleware/AuthUser.js";

const router = express.Router();
//
router.get('/api/v1/user',verifyUser,farmerOnly,getUser);
router.get('/api/v1/user/:id',verifyUser,farmerOnly,getUserById);
router.post('/api/v1/user',verifyUser,farmerOnly,createUser);
router.patch('/api/v1/user/:id',verifyUser,farmerOnly,updateUser);
router.delete('/api/v1/user/:id',verifyUser,farmerOnly,deleteUser);



// router.get('/user',getUser);
// router.get('/user/:id',getUserById);
// router.post('/user',createUser);
// router.patch('/user/:id',updateUser);
// router.delete('/user/:id',deleteUser);

export default router;