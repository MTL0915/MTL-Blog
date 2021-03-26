const appData = require('./blog.json')
const data = appData.data

module.exports = {
  devServer: {
    before(app) {
      app.get('/api/data', function(req ,res){
        res.json({
          errno: 0,
          data: data
        })
      })
    }
  }
}
