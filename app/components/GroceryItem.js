var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var GroceryItemActionCreator_1 = require('../actions/GroceryItemActionCreator');
var GroceryItem = (function (_super) {
    __extends(GroceryItem, _super);
    function GroceryItem() {
        _super.call(this);
    }
    GroceryItem.prototype.delete = function (e) {
        e.preventDefault();
        GroceryItemActionCreator_1.groceryItemActions.delete(this.props.item);
    };
    GroceryItem.prototype.togglePurchase = function (e) {
        e.preventDefault();
        var item = this.props.item;
        item.purchased ? GroceryItemActionCreator_1.groceryItemActions.unbuy(item) : GroceryItemActionCreator_1.groceryItemActions.buy(item);
    };
    GroceryItem.prototype.render = function () {
        return (React.createElement("article", {"className": 'grocery-item row'}, React.createElement("section", {"className": 'six columns'}, React.createElement("h4", {"className": this.props.item.purchased ? 'strikethrough' : ''}, this.props.item.name)), React.createElement("form", {"className": "three columns", "onSubmit": this.delete.bind(this)}, React.createElement("button", null, "×")), React.createElement("form", {"className": "three columns", "onSubmit": this.togglePurchase.bind(this)}, React.createElement("button", {"className": this.props.item.purchased ? "" : "button-primary"}, this.props.item.purchased ? "Unbuy" : "Buy"))));
    };
    return GroceryItem;
})(React.Component);
exports.GroceryItem = GroceryItem;
