var React = require("react");
var ReactDOM = require("react-dom");
var GroceryItemList_1 = require('./components/GroceryItemList');
var GroceryItemStore_1 = require('./stores/GroceryItemStore');
function render(items) {
    ReactDOM.render(React.createElement(GroceryItemList_1.GroceryItemList, {"items": items}), document.getElementById('app'));
}
GroceryItemStore_1.groceryItemStore.onChange(render);
render(GroceryItemStore_1.groceryItemStore.getItems());
