var dispatcher_1 = require('../dispatcher');
var GroceryItemStore = (function () {
    function GroceryItemStore() {
        this.items = [{
                name: "Ice Cream"
            }, {
                name: "Waffles"
            }, {
                name: "Candy",
                purchased: true
            }, {
                name: "Snarks"
            }];
        this.listeners = [];
        this.dispatcherId = dispatcher_1.dispatcher.register(this.handleDispatch.bind(this));
    }
    GroceryItemStore.prototype.getItems = function () {
        return this.items;
    };
    GroceryItemStore.prototype.onChange = function (listener) {
        this.listeners.push(listener);
    };
    GroceryItemStore.prototype.addItem = function (item) {
        this.items.push(item);
        this.triggerListeners();
    };
    GroceryItemStore.prototype.triggerListeners = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(this.items);
        }
    };
    GroceryItemStore.prototype.updatePurchaseStatus = function (item, purchase) {
        var matchIdx = this._getItemIndex(item);
        if (~matchIdx) {
            var item_1 = this.items.slice(matchIdx, matchIdx + 1).pop();
            item_1.purchased = purchase;
        }
        this.triggerListeners();
    };
    GroceryItemStore.prototype.deleteItem = function (item) {
        var matchIdx = this._getItemIndex(item);
        if (~matchIdx) {
            this.items.splice(matchIdx, 1);
        }
        this.triggerListeners();
    };
    GroceryItemStore.prototype._getItemIndex = function (item) {
        return this.items.indexOf(item);
    };
    GroceryItemStore.prototype.handleDispatch = function (event) {
        var parts = event.type.split(':'), mainKey = parts[0], action = +parts[1];
        if (mainKey === 'grocery-item') {
            switch (action) {
                case 0 /* add */:
                    this.addItem(event.payload);
                    break;
                case 1 /* delete */:
                    this.deleteItem(event.payload);
                    break;
                case 3 /* buy */:
                    this.updatePurchaseStatus(event.payload, true);
                    break;
                case 4 /* unbuy */:
                    this.updatePurchaseStatus(event.payload, false);
                    break;
            }
        }
    };
    return GroceryItemStore;
})();
var groceryItemStore = new GroceryItemStore;
exports.groceryItemStore = groceryItemStore;
