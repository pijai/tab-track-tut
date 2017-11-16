const AuthenticationController = require('./controllers/AuthenticationController.js')
const SongsController = require('./controllers/SongsController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)

  app.post('/songs',
    SongsController.post)

  app.get('/songs/:songId',
    SongsController.show)

  app.put('/songs/:songId',
    SongsController.put)
}
