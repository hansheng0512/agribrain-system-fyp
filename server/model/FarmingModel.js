import {Sequelize} from "sequelize";
import db from '../config/Database.js'
import User from '../model/UserModel.js'
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
        type: DataTypes.DATE,
        allowNull:false,
        validate: {
            notEmpty:true, //not null and not empty string
            isDate:true
        }
    },

    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty:true,
            len:[3,100]
        }
    }


},{
    freezeTableName:true,
});

User.hasMany(Farming);
Farming.belongsTo(User,{foreignKey:'user_id'});

export default Farming;





