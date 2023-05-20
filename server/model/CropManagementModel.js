import {Sequelize} from "sequelize";
import db from '../config/Database.js'
import Crop from "./CropModel.js";
import User from "./UserModel.js";

const {DataTypes} = Sequelize;

const CropManagement = db.define('CROP_MANAGEMENT_T',{

    management_uuid:{
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
        }
    },

    management_crop:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true,
            len:[3,100]
        }
    },

    management_in:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },

    management_out:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },

    management_inventory:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },

    cropId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },

    userId:{
        type: DataTypes.INTEGER,
        allowNull:true,
        validate: {
            notEmpty:true,
        }
    }

},{
    freezeTableName:true,
});

// Crop.hasMany(CropManagement);
CropManagement.belongsTo(Crop,{foreignKey:'cropId'});
CropManagement.belongsTo(User,{foreignKey:'userId'});

export default CropManagement;





