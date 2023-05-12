import {Sequelize} from "sequelize";
import db from '../config/Database.js'

const {DataTypes} = Sequelize;

const User = db.define('USER_T',{

    user_uuid:{
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
        }
    },

    user_fullname:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true,
            len:[3,100]
        }
    },

    user_email:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true,
            isEmail:true,
        }
    },

    user_password:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
        }
    },

    user_role:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
        }
    },

    user_phone:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
        }
    },

},{
    freezeTableName:true,
});

export default User;





