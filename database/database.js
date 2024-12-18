var  mongoose = require('mongoose')
var Schema = mongoose.Schema


var Hotel = new Schema({
    name: String,
    fabricationDate : Date,
    nbrRooms: {
        type: Number,
        default: 10
    }
});

mongoose.model('hotels',Hotel);

 mongoose.connect('mongodb://127.0.0.1:27017/Test_Hotel');
