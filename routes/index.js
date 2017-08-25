const root = require('./root')

module.exports = function setRoutes(app) {
  app.use('/', root);
}
