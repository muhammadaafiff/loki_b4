// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../../config/config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Product = db.define('user', {
  // Define attributes
  username: {
    type: DataTypes.INTEGER
  },
  password: {
    type: DataTypes.VARCHAR
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model user
export default user;