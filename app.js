(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // TO BUY controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buy = this;       

        buy.buyItems = ShoppingListCheckOffService.showWhatToBuy();

        buy.moveItemToAnotherList = function(itemIndex){
            ShoppingListCheckOffService.moveItemToAnotherList(itemIndex);
        };
    };

    // ALREADY BOUGHT controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var bought = this;

        bought.boughtItems = ShoppingListCheckOffService.showWhatWasBought();
    };

    // Service
    function ShoppingListCheckOffService(){
        var service = this;

        var buyItems = [
            {
                name: "Cookies",
                quantity : 10 
            },
            {
                name: "Sugar",
                quantity: "1 kg"
            },
            {
                name: "Pepsi",
                quantity: "3 bottles"
            },
            {
                name: "Cucumbers",
                quantity: "7 kg"
            },
            {
                name: "Berries",
                quantity: "500 g"
            }
        ];

        var boughtItems = [];

        service.showWhatToBuy = function(){
            return buyItems;
        };

        service.showWhatWasBought = function(){
            return boughtItems;
        }

        service.moveItemToAnotherList = function(itemIndex){            
            var boughtItem = buyItems.splice(itemIndex, 1);
            var item = {
                name: boughtItem[0].name,
                quantity: boughtItem[0].quantity
            };
            boughtItems.push(item);                        
        };
    };
})();