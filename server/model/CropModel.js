import {Sequelize} from "sequelize";
import db from '../config/Database.js'
import Farming from "./FarmingModel.js";
import User from "./UserModel.js";

const {DataTypes} = Sequelize;

const Crop = db.define('CROP_T',{

    crop_uuid:{
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
        }
    },

    crop_name:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true,
            len:[3,100]
        }
    },

    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },

},{
    freezeTableName:true,
});

User.hasMany(Crop);
Crop.belongsTo(User,{foreignKey:'userId'});

export default Crop;





