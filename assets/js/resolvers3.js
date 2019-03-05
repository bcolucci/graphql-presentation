// src/resolvers.js

// [...]

const views = {} // in-memory key-value store (e.g. Redis)

module.exports = {
  Query: {
    // [...]
  },
  Employee: {
    views: ({ emp_no }) => views[emp_no] || 0
    // [...]
  },
  Mutation: {
    incViews: async (_, { emp_no }) => {
      views[emp_no] = views[emp_no] ? views[emp_no] + 1 : 1
      return views[emp_no]
    }
  }
}
