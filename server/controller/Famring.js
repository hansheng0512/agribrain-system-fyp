import Farming from "../model/FarmingModel.js";
import Crop from "../model/CropModel.js";
import User from "../model/UserModel.js";


export const getFarming = async (req, res) => {
    try{
        let response;
        response = await Farming.findAll(({
            attributes:['farming_uuid','farming_name','farming_date'],
        }))
        res.status(200).json(response);

    }catch (error){
        res.status(500).json({msg:error.message});
    }

}



export const getFarmingById = (req,res) =>{

}


export const createFarming = async (req,res) =>{
    const { farming_name, cropId } = req.body;

    try {
        // Check if the crop exists
        const crop = await Crop.findOne({ where: { crop_uuid: cropId } });
        if (!crop) {
            return res.status(404).json({ msg: "Crop not found" });
        }

        // Create the farming record associated with the specified crop
        await Farming.create({
            farming_name: farming_name,
            cropId: crop.id,
        });

        res.status(201).json({ msg: "Farming List Created Successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const updateFarming = (req,res) =>{

}


export const deleteFarming = (req,res) =>{

}