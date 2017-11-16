const {Song} = require('../models')

module.exports = {

  async index (req, res) {
    try {
      const song = await Song.findAll(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetching songs'
      })
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating songs'
      })
    }
  }
}
