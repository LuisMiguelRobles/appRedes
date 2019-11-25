'use strict'

var conf = require('./db-conf'),
mongoose = require('mongoose');var mongoose = require('mongoose'),
conf = require('./db-conf'),
Schema = mongoose.Schema,
MovieSchema = new Schema({
	movie_id : "string",
	title : "string",
	release_year : "string",
	rating : "string",
	image : "string"
},
{
	collection : "movies"
}),
MovieModel = mongoose.model("Movie", MovieSchema)

mongoose.connect(conf.mongo.host, {
  useNewUrlParser: true
});	
	

module.exports = MovieModel