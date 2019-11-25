'use strict'

var conn = require('./movie-connection'),
	MovieModel = () => {}

MovieModel.getAll = (cb) => {
	conn
		.find()
		.exec((err, docs) => {
			if(err) throw err
			cb(docs)
		})
}

MovieModel.getOne = (id, cb) => {
	conn
		.findOne({_id : id})
		.exec((err, docs) => {
			if(err) throw err
			cb(docs)
		})
}

MovieModel.save = (data, cb) => {
	
	conn.create(data, (err) => {
		if(err) throw err
			cb()
	})
			
		
}

MovieModel.update = (data, cb)=>{
	console.log("data", data)
	conn.findOneAndUpdate(
		{_id : data._id},
		{
			title : data.title,
			release_year : data.release_year,
			rating : data.rating,
			image : data.image
		},
		(err) => {
			if(err) throw(err)
			cb()
		}
	)
}

MovieModel.delete = (id, cb) => {
	conn.remove({_id : id}, (err, docs) => {
		if(err) throw err
		cb()
	})
}

module.exports = MovieModel