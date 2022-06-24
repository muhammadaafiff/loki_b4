import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('user', {
  username: {
    type: DataTypes.INTEGER
  },
  password: {
    type: DataTypes.VARCHAR
  }
},
{
  freezeTableName: true
});
 
// Export model user
export default user;