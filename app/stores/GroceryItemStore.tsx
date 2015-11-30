import {dispatcher, IDispatchPayload} from '../dispatcher';
import {Actions} from '../actions/BaseActions';
import {restHelper} from  '../helpers/RestHelper';

interface Item{
	name:string;
	purchased?:boolean;
}

class GroceryItemStore{
	
	private items:Array<Item> = [];
	private listeners:Array<Function> = [];
	private dispatcherId:string;
	
	constructor(){
		this.dispatcherId = dispatcher.register(this.handleDispatch.bind(this));
		this.initialize();
	}
	
	getItems(){
		return this.items;
	}
	
	onChange(listener){
		this.listeners.push(listener);
	}
	
	private initialize(){
		restHelper.get("api/items").then((data:Item[])=> {
			this.items = data;
			this.triggerListeners();
		});
	}
	
	private addItem(item:Item){
		restHelper.post("api/items", item);
		this.items.push(item);
		this.triggerListeners();
	}
	
	private triggerListeners(){
		for(let listener of this.listeners){
			listener(this.items);
		}
	}
	
	private updatePurchaseStatus(item:Item, purchase:boolean){
		
		let matchIdx = this._getItemIndex(item);
		if(~matchIdx){
			let item = this.items.slice(matchIdx, matchIdx+1).pop();
			item.purchased = purchase;
		}
		
		this.triggerListeners();
	}
	
	private deleteItem(item:Item){
		let matchIdx = this._getItemIndex(item);
		
		if(~matchIdx){
			this.items.splice(matchIdx, 1);
		}
		
		this.triggerListeners();
	}
	
	private _getItemIndex(item:Item){
		return this.items.indexOf(item);
	}
	
	private handleDispatch(event:IDispatchPayload<Item>){
		let parts = event.type.split(':'),
		    mainKey = parts[0], 
			action = +parts[1];
			
		if(mainKey === 'grocery-item'){
			switch(action){
				case Actions.add:
					this.addItem(event.payload);
				break;
				
				case Actions.delete:
					this.deleteItem(event.payload);
					break;
				
				case Actions.buy:
					this.updatePurchaseStatus(event.payload, true);
					break;
				
				case Actions.unbuy:
					this.updatePurchaseStatus(event.payload, false);
					break;
			}
		}
	}
}

let groceryItemStore:GroceryItemStore = new GroceryItemStore;
export {groceryItemStore, Item};