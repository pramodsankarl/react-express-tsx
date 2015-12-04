import {IRoute, Express, Application, Router} from 'express';
import {GroceryItem, IGroceryItem} from '../models/GroceryItems';

export default function (router:Router){
	router
		.get('/items', (req, res)=> GroceryItem.find((err, data)=> res.send(data)))
		.post('/items', (req, res)=> {
			let groceryItem = new GroceryItem(req.body);
			groceryItem.save((err, data:IGroceryItem) => res.status(204).send(data._id));
		})
		.delete('/items/:id', (req, res) => 
				GroceryItem.findOne({ _id: req.params.id})
				.remove()
		)
	    .patch('/items/:id', (req, res) => 
			GroceryItem.findOne({_id:req.body._id}, (err, doc) => {
	         for(let key in req.body){
				 doc[key] = req.body[key];
			 }
			 doc.save();
			 res.status(200).send(null);
		}));
}

