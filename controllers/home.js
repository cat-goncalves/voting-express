const Movie = require('../models/Movie')

module.exports = {
  getIndex: async (req, res) => {
    try {
      
      const movies = await Movie.find()
      let totalVotes = movies.reduce((a,c) => a + c.votes, 0)
      console.log(movies)
      res.render('index.ejs', { movies: movies, totalVotes: totalVotes })
    }
    catch(err) {
      console.log(err)
    }
  },

  castVote: async (req, res) => {
    try {
      await saveToLocalStorage()
      await Movie.findOneAndUpdate({_id: req.params.id}, {$inc: {votes: 1}})
      res.redirect('/')
    }
    catch(error) {
      console.error(error)
    }
  }
}

