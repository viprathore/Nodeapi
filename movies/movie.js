var express = require('express');
var router = express.Router();
var movieModel = require("../models/movie");



router.post("/insert",(req,res)=>{
	movieModel.create({
		name:req.body.name,
		description:req.body.description,
		release_date:req.body.release_date,
		genre:req.body.genre,
		duration:req.body.duration,
		rating:req.body.rating
	},(err,data)=>{
		if(err){
			console.log(err)
		}else{
			console.log(data)
			res.status(200).json({
				Apiname:"Data inserted",
				status:200,
				data:data
			})
		}
	})
})


router.get("/getmovies",(req,res)=>{
	movieModel.find({},(err,data)=>{
		if(err){
			console.log(err)
		}else{
			res.status(200).json({
				Apiname:"getMovies",
				status:200,
				data:data
			})
		}
	})
})



router.get("/deletemovie/:id",(req,res)=>{
	var id = req.params.id;
	movieModel.deleteOne({_id:id},(err,data)=>{
		if(err){
			console.log(err)
		}else{
			res.status(200).json({
				Apiname:"Delete movie",
				status:200,
				data:"Deleted"
			})
		}
	})
})

module.exports = router;