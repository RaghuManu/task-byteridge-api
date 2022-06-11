const config = require('config.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/byteridgeInterview", { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
console.log("mongodb connected")
module.exports = {
    History: require('../history/history.model'),
    User: require('../users/user.model')
    
};