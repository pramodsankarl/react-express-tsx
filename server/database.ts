/// <reference path="../typings/mongoose/mongoose.d.ts" />
import {Mongoose, connect, connection} from "mongoose";
import {GroceryItem, IGroceryItem} from './models/GroceryItems';


function conn(){
	
	connection.db.dropDatabase();
	
	let items = [{
		name:"Ice Cream"
	},{
		name:"Waffles"
	},{
		name:"Candy",
		purchased:true
	},{
		name:"Snarks"
	}];
	
	for(let item of items){
		new GroceryItem(item).save();
	}
}

connect('mongodb://localhost/grocery', conn);

export {};