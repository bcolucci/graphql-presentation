// src/resolvers.js

// [...]

module.exports = {
  Query: {
    // [...]
  },
  Employee: {
    full_name: ({ first_name, last_name }) => `${first_name} ${last_name}`,
    // [...]
  }
}
