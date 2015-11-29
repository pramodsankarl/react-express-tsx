var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var GroceryItemActionCreator_1 = require('../actions/GroceryItemActionCreator');
var GroceryListAddItem = (function (_super) {
    __extends(GroceryListAddItem, _super);
    function GroceryListAddItem() {
        _super.call(this);
        this.state = {};
    }
    GroceryListAddItem.prototype.getInitialState = function () {
        return {
            input: ""
        };
    };
    GroceryListAddItem.prototype.handleInputName = function (e) {
        this.setState({ input: e.target.value });
    };
    GroceryListAddItem.prototype.addItem = function (e) {
        e.preventDefault();
        GroceryItemActionCreator_1.groceryItemActions.add({
            name: this.state.input
        });
        this.state.input = "";
    };
    GroceryListAddItem.prototype.render = function () {
        return (React.createElement("div", {"className": 'grocery-addItem'}, React.createElement("form", {"onSubmit": this.addItem.bind(this)}, React.createElement("input", {"type": "text", "value": this.state.input, "onChange": this.handleInputName.bind(this)}), React.createElement("button", null, "Add Item"))));
    };
    return GroceryListAddItem;
})(React.Component);
exports.GroceryListAddItem = GroceryListAddItem;
