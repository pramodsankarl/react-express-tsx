import {dispatcher} from '../dispatcher';
import {Item} from '../stores/GroceryItemStore';
import {Actions} from './BaseActions';

class GroceryItemActions{
	add(item:Item){
		console.log("Dispatching grocery-item:add", item);
		this._dispatch(item, Actions.add);
	}
	
	delete(item:Item){
		console.log("Dispatching grocery-item:delete", item);
		this._dispatch(item, Actions.delete);
	}
	
	unbuy(item:Item){
		this._dispatch(item, Actions.unbuy);
	}
	
	buy(item:Item){
		this._dispatch(item, Actions.buy);
	}
	
	private _dispatch(item:Item, action:Actions){
		dispatcher.dispatch({
			payload:item,
			type: 'grocery-item:' + action
		});
	}
}

let groceryItemActions:GroceryItemActions = new GroceryItemActions;

export {groceryItemActions, Actions};
