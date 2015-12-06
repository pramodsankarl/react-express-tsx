import {Response} from 'express';
import {GroceryItem, IGroceryItem} from '../models/GroceryItems';

class ItemService{
	constructor(){}
	
	getList(req, res:Response){
		return GroceryItem.find((err, data) => res.send(data));
	}
	
	add(req, res:Response){
		let groceryItem = new GroceryItem(req.body);
		groceryItem.save((err, data:IGroceryItem) => 
				res.status(200).send(data._id));
	}
	
	update(req, res:Response){
		GroceryItem.findOne({_id:req.body._id}, (err, doc) => {
			
			for(let key in req.body){
				doc[key] = req.body[key];
			}
			
			doc.save();
			
			res.status(200).send(null);
		});
	}
	
	remove(req, res:Response){
		GroceryItem.findOne({ _id: req.params.id})
		.remove((err, doc) => {
				res.status(202).send(null);
			});
	}
	
}

let itemService = new ItemService();  

export {itemService, ItemService };