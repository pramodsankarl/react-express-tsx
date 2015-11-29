import {IRoute, Express, Application} from 'express';

export default function (app:Application){
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
	
	app.get('/api/items', (req, res)=> res.send(items));
}

