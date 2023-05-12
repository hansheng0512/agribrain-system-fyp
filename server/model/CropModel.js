import {Sequelize} from "sequelize";
import db from '../config/Database.js'

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

},{
    freezeTableName:true,
});

export default Crop;





