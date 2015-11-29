var dispatcher_1 = require('../dispatcher');
var GroceryItemActions = (function () {
    function GroceryItemActions() {
    }
    GroceryItemActions.prototype.add = function (item) {
        console.log("Dispatching grocery-item:add", item);
        this._dispatch(item, 0 /* add */);
    };
    GroceryItemActions.prototype.delete = function (item) {
        console.log("Dispatching grocery-item:delete", item);
        this._dispatch(item, 1 /* delete */);
    };
    GroceryItemActions.prototype.unbuy = function (item) {
        this._dispatch(item, 4 /* unbuy */);
    };
    GroceryItemActions.prototype.buy = function (item) {
        this._dispatch(item, 3 /* buy */);
    };
    GroceryItemActions.prototype._dispatch = function (item, action) {
        dispatcher_1.dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:' + action
        });
    };
    return GroceryItemActions;
})();
var groceryItemActions = new GroceryItemActions;
exports.groceryItemActions = groceryItemActions;
