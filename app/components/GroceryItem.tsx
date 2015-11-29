import * as React from "react";
import {Item} from '../stores/GroceryItemStore';
import {groceryItemActions} from '../actions/GroceryItemActionCreator';


interface GroceryItemProps extends React.Props<any>{
	item:Item;
	key:string;
}

interface GroceryItemState{
	
}

class GroceryItem extends React.Component<GroceryItemProps, GroceryItemState>{
	
	constructor(){
		super();
	}
	
	delete(e:Event){
		e.preventDefault();
		groceryItemActions.delete(this.props.item);
	}
	
	togglePurchase(e:Event){
		e.preventDefault();
		let item = this.props.item;
		item.purchased ? groceryItemActions.unbuy(item) : groceryItemActions.buy(item);
	}
	
	render(){
		return  (
			<article className='grocery-item row'>
				<section className='six columns'>
					<h4 className={this.props.item.purchased ? 'strikethrough': ''}>{this.props.item.name}</h4>
				</section>
				<form className="three columns" onSubmit={this.delete.bind(this)}>
					<button>&times;</button>
				</form>
				<form className="three columns" onSubmit={this.togglePurchase.bind(this)}>
					<button className={this.props.item.purchased ? "" : "button-primary"}>{this.props.item.purchased ?  "Unbuy" : "Buy"}</button>
				</form>
			</article>
			);
	}
	
}

export {GroceryItem}