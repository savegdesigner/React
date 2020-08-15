import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todo', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})