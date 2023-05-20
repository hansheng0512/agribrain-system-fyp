import {Sequelize} from "sequelize";
import db from '../config/Database.js'
import User from '../model/UserModel.js'
import Crop from "../model/CropModel.js";
const {DataTypes} = Sequelize;

const Farming = db.define('FARMING_T',{

    farming_uuid:{
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
        }
    },

    farming_name:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true,
            len:[3,100]
        }
    },

    farming_date:{
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
            notEmpty:true,
            isDate:true
        }
    },

    cropId:{
        type: DataTypes.INTEGER,
        allowNull:true,
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

Farming.belongsTo(Crop,{foreignKey:'cropId'});
Farming.belongsTo(User,{foreignKey:'userId'});

export default Farming;
