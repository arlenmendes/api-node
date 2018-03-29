const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api-node');
mongoose.Promise = global.Promise;

module.exports = mongoose;