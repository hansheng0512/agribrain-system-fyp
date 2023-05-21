import Farming from "../model/FarmingModel.js";
import Crop from "../model/CropModel.js";
import User from "../model/UserModel.js";


export const getFarming = async (req, res) => {
    try{
        let response;
        if(req.user_role === "Farmer"){
            response = await Farming.findAll(({
                attributes:['farming_uuid','farming_name','farming_date'],
                include:[
                    {
                        model:User,
                        attributes:['user_fullname','user_email'],
                    },
                    {
                        model:Crop,
                        attributes:['crop_name'],
                    },
                ]
            }))
        }else{
            response = await Farming.findAll(({
                attributes:['farming_uuid','farming_name','farming_date'],
                where: {
                  userId: req.userId
                },
                include:[{
                    model:User,
                    attributes:['user_fullname','user_email'],
                },
                {
                    model:Crop,
                    attributes:['crop_name'],
                },
                ]
            }))
        }
        res.status(200).json(response);
    }catch (error){
        res.status(500).json({msg:error.message});
    }

}



export const getFarmingById = (req,res) =>{

}


export const createFarming = async (req, res) => {
    const {farming_name,farming_date,cropId} = req.body;
    try{
        await Farming.create({
            farming_name:farming_name,
            farming_date:farming_date,
            cropId:cropId,
            userId: req.userId
        });
        res.status(201).json({msg:"Farming Record Successfully"})
    }catch (error){
        res.status(500).json({msg:error.message});
    }
};



export const updateFarming = (req,res) =>{

}


export const deleteFarming = (req,res) =>{

}