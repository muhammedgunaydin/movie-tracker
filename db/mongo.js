const mongoose = require ('mongoose')

const db = mongoose.connect('mongodb://127.0.0.1:27017/movie-tracker',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connected to Mongo')
})

module.exports = db