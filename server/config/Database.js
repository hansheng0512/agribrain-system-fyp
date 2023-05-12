import {Sequelize} from "sequelize";

const db = new Sequelize('agribrain-db', 'root','',{
    host: 'localhost',
    dialect:'mysql',
});

export default db;