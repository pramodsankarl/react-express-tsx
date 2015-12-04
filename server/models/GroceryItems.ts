import {Mongoose, Schema, model,Document} from 'mongoose';

interface IGroceryItem extends Document {
	purchased?:boolean;
	name:string;
	id?:string;
}


let GroceryItemSchema = new Schema({
	name:String,
	purchased:Boolean,
	id:String
});

let GroceryItem = model<IGroceryItem>('GroceryItem', GroceryItemSchema, "groceryItems");

export {GroceryItem, IGroceryItem};