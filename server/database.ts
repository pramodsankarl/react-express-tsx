/// <reference path="../typings/mongoose/mongoose.d.ts" />
import {Mongoose, connect} from "mongoose";

connect('mongodb://localhost/grocery', ()=>{
	console.log("Connected...");
});

export {};