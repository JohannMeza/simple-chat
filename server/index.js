const { server, app } = require('./app');
const startConnection = require('./database');

startConnection()

server.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'))
})