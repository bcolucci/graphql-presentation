// src/resolvers.js

// [...]

// employees(offset: Int, limit: Int): [Employee!]!

module.exports = {
  Query: {
    employees: async (_, { offset, limit }) => {
      const conn = await mysqlConnection()
      const [rows] = await conn.query('SELECT * FROM employees LIMIT ?, ?', [
        offset || 0,
        limit || 10
      ])
      conn.end()
      return rows
    }
  },
  Employee: {
    // [...]
  },
  Mutation: {
    // [...]
  }
}
