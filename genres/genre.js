var express = require('express');
var router = express.Router();
var genreModel = require("../models/genre");



router.post("/insert",(req,res)=>{
	genreModel.create({
		name:req.body.name,
		description:req.body.description		
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


router.get("/getgenredata",(req,res)=>{
	genreModel.find({},(err,data)=>{
		if(err){
			console.log(err)
		}else{
			res.status(200).json({
				Apiname:"getGenre",
				status:200,
				data:data
			})
		}
	})
})



router.get("/deletegenre/:id",(req,res)=>{
	var id = req.params.id;
	genreModel.deleteOne({_id:id},(err,data)=>{
		if(err){
			console.log(err)
		}else{
			if(data){
				res.status(200).json({
					Apiname:"Delete movie",
					status:200,
					message:"Deleted"
				})
			}else{
				res.status(200).json({
					Apiname:"Delete movie",
					status:200,
					message:"Please check the Id"
				})
			}
		}
	})
})

module.exports = router;