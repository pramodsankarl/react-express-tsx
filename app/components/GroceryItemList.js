var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var GroceryItem_1 = require('./GroceryItem');
var GroceryListAddItem_1 = require('./GroceryListAddItem');
var GroceryItemList = (function (_super) {
    __extends(GroceryItemList, _super);
    function GroceryItemList() {
        _super.call(this);
    }
    GroceryItemList.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, " Grocery Listify"), React.createElement("div", null, this.props.items.map(function (item, idx) { return React.createElement(GroceryItem_1.GroceryItem, {"item": item, "key": "item" + idx}); })), React.createElement(GroceryListAddItem_1.GroceryListAddItem, null)));
    };
    return GroceryItemList;
})(React.Component);
exports.GroceryItemList = GroceryItemList;
