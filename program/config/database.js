const Sequelize = require('sequelize');

const db = new Sequelize('loki', 'root', '', {
    dialect: 'mysql'
})

module.exports = db

// export {db};
