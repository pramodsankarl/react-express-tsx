import * as React from "react";
import * as ReactDOM from "react-dom";
import {GroceryItemList} from './components/GroceryItemList';
import {groceryItemStore} from './stores/GroceryItemStore';

function render(items){
	ReactDOM.render(<GroceryItemList  items={items} />, document.getElementById('app'));
}

groceryItemStore.onChange(render);


render(groceryItemStore.getItems());
