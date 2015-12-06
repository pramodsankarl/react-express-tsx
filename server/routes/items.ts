import {IRoute, Express, Application, Router} from 'express';
import {itemService} from '../services/GroceryItem';

export default function (router:Router){
	router
		.get('/items', itemService.getList)
		.post('/items', itemService.add)
		.delete('/items/:id', itemService.remove)
	    .patch('/items/:id', itemService.update);
}

