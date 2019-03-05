// src/resolvers.js

// [...]

const inMemViews = {}

module.exports = {
  Query: {
    // [...]
  },
  Employee: {
    views: ({ emp_no }) => inMemViews[emp_no] || 0,
    // [...]
  },
  Mutation: {
    incViews: async (_, { emp_no }) => {
      inMemViews[emp_no] = inMemViews[emp_no] ? inMemViews[emp_no] + 1 : 1
      return inMemViews[emp_no]
    }
  }
}
