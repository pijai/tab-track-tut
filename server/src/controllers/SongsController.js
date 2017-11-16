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
  },

  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the page.'
      })
    }
  },

  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the page.'
      })
    }
  }
}
