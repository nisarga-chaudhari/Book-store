var mongoose = require("mongoose")
var url="mongodb://localhost:27017/Book-Store"  
mongoose.connect(url)
var db=mongoose.connection
console.log('successfully connected to mongodb...')
module.exports=db
