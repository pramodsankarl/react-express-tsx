import {IRoute, Express, Application, Router} from 'express';

export default function (router:Router){
	var items = [{
		name:"Ice Cream"
	},{
		name:"Waffles"
	},{
		name:"Candy",
		purchased:true
	},{
		name:"Snarks"
	}];
	
	router
		.get('/items', (req, res)=> res.send(items))
		.post('/items', (req, res)=> {
			var item = req.body;
			items.push(item);
			res.status(200).send(item);
		});
}

