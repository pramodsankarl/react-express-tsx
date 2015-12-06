import * as React from "react";
import {groceryItemActions} from '../actions/GroceryItemActionCreator';

interface GroceryListAddItemProps extends React.Props<any>{
}

interface GroceryListAddItemState{
	input?:any;
}

class GroceryListAddItem extends React.Component<GroceryListAddItemProps, GroceryListAddItemState>{
	
	state:GroceryListAddItemState = {};
	
	constructor(){
		super();
		this.state.input = "";
	}
	
	handleInputName(e:Event){
		this.setState({input :(e.target as any).value});
	}
	
	
	addItem(e:Event){
		e.preventDefault();
		
		groceryItemActions.add({
			name:this.state.input
		});
		
		this.state.input = "";
	}
	
	render(){
		return  (
		<div className='grocery-addItem'>
		  <form onSubmit={this.addItem.bind(this)}>
		  		 <input type="text" value={this.state.input} onChange={this.handleInputName.bind(this)}/>
				 <button>Add Item</button> 
		  </form>
		</div>
		);
	}
}

export {GroceryListAddItem}