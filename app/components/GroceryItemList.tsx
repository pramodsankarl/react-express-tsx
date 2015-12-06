import * as React from "react";
import {GroceryItem} from './GroceryItem';
import {GroceryListAddItem} from './GroceryListAddItem';
import {Item} from  '../stores/GroceryItemStore';

interface GroceryItemListProps extends React.Props<any>{
	items:Array<Item>;
}

interface GroceryItemListState{
	
}

class GroceryItemList extends React.Component<GroceryItemListProps, GroceryItemListState>{
	
	constructor(){
		super();
	}
	
	render(){
		return  (
		<div>
			<h1>Grocery List</h1>
			<div>
				{this.props.items.map((item, idx)=> <GroceryItem item={item} key={"item" + idx}/>)}
			</div>
			<GroceryListAddItem />
		</div>
		);
	}
	
}

export {GroceryItemList}