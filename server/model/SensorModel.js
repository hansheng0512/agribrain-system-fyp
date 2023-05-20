import {Sequelize} from "sequelize";
import db from '../config/Database.js'

const {DataTypes} = Sequelize;

const Sensor = db.define('SENSOR_T',{

    sensor_uuid:{
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
        }
    },

    sensor_moisture:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },

    sensor_temperature:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },

    sensor_humidity:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },

},{
    freezeTableName:true,
});


export default Sensor;





