import {Sequelize} from "sequelize";

const db = new Sequelize('agribrain-system-db', 'root','',{
    host: 'localhost',
    dialect:'mysql',
});

export default db;