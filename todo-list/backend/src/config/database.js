const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

const url = 'mongodb://localhost/todo'

module.exports = mongoose.connect(url)