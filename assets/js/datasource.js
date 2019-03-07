// npm install apollo-datasource-rest
const { RESTDataSource } = require('apollo-datasource-rest')

class MoviesAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://movies-api.example.com/'
  }

  async getMovie (id) {
    return this.get(`movies/${id}`)
  }

  async getMostViewedMovies (limit = 10) {
    const { results } = await this.get('movies', {
      per_page: limit,
      order_by: 'most_viewed'
    })
    return results
  }
}
