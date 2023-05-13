import Crop from "../model/CropModel.js";
import User from "../model/UserModel.js";
import {Op} from "sequelize"
export const getCrop = async (req,res) =>{
    try{
        let response;
        if(req.user_role === "Farmer"){
            response = await Crop.findAll(({
                attributes:['crop_uuid','crop_name'],
                include:[{
                    model:User,
                    attributes:['user_fullname','user_email'],
                }]
            }))
        }else{
            response = await Crop.findAll(({
                attributes:['crop_uuid','crop_name'],
                where: {
                  userId: req.userId
                },
                include:[{
                    model:User,
                    attributes:['user_fullname','user_email'],
                }]
            }))
        }
        res.status(200).json(response);

    }catch (error){
        res.status(500).json({msg:error.message});
    }
}


export const getCropById = async (req,res) =>{
    try{
        const crop = await Crop.findOne({
            where:{
                crop_uuid:req.params.id,
            }
        });
        if(!crop) return res.status(404).json({msg:"CropList not found"})
        let response;
        if(req.user_role === "Farmer"){
            response = await Crop.findOne(({
                attributes:['crop_uuid','crop_name'],
                where:{
                    id:crop.id,
                },
                include:[{
                    model:User,
                    attributes:['user_fullname','user_email'],
                }]
            }))
        }else{
            response = await Crop.findOne(({
                attributes:['crop_uuid','crop_name'],
                where: {
                    [Op.and]:[{id:crop.id},{userId:req.userId}],
                },
                include:[{
                    model:User,
                    attributes:['user_fullname','user_email'],
                }]
            }))
        }
        res.status(200).json(response);

    }catch (error){
        res.status(500).json({msg:error.message});
    }
}


export const createCrop = async (req,res) =>{
    const {crop_name} = req.body;
    try{
        await Crop.create({
            crop_name:crop_name,
            userId: req.userId
        });
        res.status(201).json({msg:"CropList Created Successfully"})
    }catch (error){
        res.status(500).json({msg:error.message});
    }
}


export const updateCrop = async (req,res) =>{
    try{
        const crop = await Crop.findOne({
            where:{
                crop_uuid:req.params.id,
            }
        });
        if(!crop) return res.status(404).json({msg:"CropList not found"})
        const {crop_name} = req.body;
        if(req.user_role === "Farmer"){
            await Crop.update({crop_name},{
                where:{
                    id: crop.id
                }
            });
        }else{
            if(req.userId !== crop.userId) return res.status(403).json({msg:"Access Denied"})
            await Crop.update({crop_name},{
                where: {
                    [Op.and]:[{id:crop.id},{userId:req.userId}],
                },
            });
        }
        res.status(200).json({msg:"CropList Updated Successfully"});
    }catch (error){
        res.status(500).json({msg:error.message});
    }
}


export const deleteCrop = async (req,res) =>{
    try{
        const crop = await Crop.findOne({
            where:{
                crop_uuid:req.params.id,
            }
        });
        if(!crop) return res.status(404).json({msg:"CropList not found"})
        const {crop_name} = req.body;
        if(req.user_role === "Farmer"){
            await Crop.destroy({
                where:{
                    id: crop.id
                }
            });
        }else{
            if(req.userId !== crop.userId) return res.status(403).json({msg:"Access Denied"})
            await Crop.destroy({
                where: {
                    [Op.and]:[{id:crop.id},{userId:req.userId}],
                },
            });
        }
        res.status(200).json({msg:"CropList Deleted Successfully"});
    }catch (error){
        res.status(500).json({msg:error.message});
    }
}