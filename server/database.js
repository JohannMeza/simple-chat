const { connect } = require('mongoose');

const startConnection = () => 
connect('mongodb://localhost/simple-chat')
.then(() => {
  console.log('Database is connected')
})
.catch(err => {
  console.log('Error in the connection', err)
})

module.exports = startConnection