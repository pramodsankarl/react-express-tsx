import * as React from "react";
import * as ReactDOM from "react-dom/server"
import {GroceryItem, IGroceryItem} from './models/GroceryItems';
import {GroceryItemList} from '../app/components/GroceryItemList';

export default function (req, res) {
		let application = React.createFactory(GroceryItemList);
		
		GroceryItem.find((error, items) => {
			
			let reactOutput = ReactDOM.renderToString(application({
				items
			}));
			
			res.render('./../app/index.ejs', {reactOutput});
		});
}