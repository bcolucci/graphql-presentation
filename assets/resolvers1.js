// src/resolvers.js
const mysqlConnection = require('./mysqlConnection')

module.exports = {
  Query: {
    employees: async () => {
      const conn = await mysqlConnection()
      const [rows] = await conn.query('SELECT * FROM employees')
      conn.end()
      return rows
    }
  },
  Employee: {
    title: async ({ emp_no }) => {
      const conn = await mysqlConnection()
      const [rows] = await conn.query('SELECT * FROM titles WHERE emp_no = ?', [
        emp_no
      ])
      conn.end()
      return rows[0]
    }
  }
}