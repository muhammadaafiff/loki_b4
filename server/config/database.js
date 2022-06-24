import { Sequelize } from "sequelize";
 
const db = new Sequelize('loki_b4', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;