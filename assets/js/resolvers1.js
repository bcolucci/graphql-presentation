// src/resolvers.js
const mysqlConnection = require('./mysqlConnection')

module.exports = {
  Query: {
    employees: async () => {
      const conn = await mysqlConnection()
      const [rows] = await conn.query('SELECT * FROM employees')
      conn.end()
      return rows
      // return Employees.findAll() with Sequelize
    }
  }
}
